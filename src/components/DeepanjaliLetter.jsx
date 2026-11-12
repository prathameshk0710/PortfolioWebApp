import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'


/* ── Polaroid memories ── */
const memories = [
  { src: '/photos/1.jpg', caption: 'Weeks of effort, one perfect gift \uD83D\uDC3E', rotate: -3 },
  { src: '/photos/2.jpg', caption: 'My first photography class \uD83C\uDFDE\uFE0F', rotate: 4 },
  { src: '/photos/3.jpg', caption: 'The best bday you can ever celebrate\uD83E\uDD73', rotate: -2 },
  { src: '/photos/4.jpg', caption: 'Bhand Deepa Boi \uD83E\uDD74\uD83C\uDF7A', rotate: 5 },
  { src: '/photos/5.jpg', caption: 'Random plans, priceless memories \uD83C\uDF38', rotate: -4 },
  { src: '/photos/6.jpg', caption: 'In one frame, for the last time...', rotate: 3 },
  { src: '/photos/7.jpg', caption: 'Best Ganesh Chaturthi ever \uD83D\uDE4F\u2728', rotate: -3 },
  { src: '/photos/8.jpg', caption: 'Cuties together \uD83E\uDD17\uD83D\uDC95', rotate: 4 },
  { src: "/photos/9.jpg", caption: "It\u0027s just us time \uD83D\uDC96", rotate: -2 },
]

/* cleaned below �', rotate: 4 },
{ src: '/photos/3.jpg', caption: 'Us being us 😂', rotate: -2 },
{ src: '/photos/4.jpg', caption: 'Bhand Deepa Boi 🥴🍺', rotate: 5 },
{ src: '/photos/5.jpg', caption: 'More memories 🌸', rotate: -4 },
{ src: '/photos/6.jpg', caption: 'In one frame, for the last time... �', rotate: 3 },
{ src: '/photos/7.jpg', caption: 'Best Ganesh Chaturthi ever �✨', rotate: -3 },
{ src: '/photos/8.jpg', caption: 'Cuties together 🤗💕', rotate: 4 },
end */
// { src: '/photos/9.jpg', caption: "It's just us time 💖", rotate: -2 },
const Polaroid = ({ index, src, caption, rotate }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30, rotate: rotate - 5 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : {}}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="bg-white p-2 pb-10 md:p-3 md:pb-12 rounded-sm shadow-2xl cursor-pointer relative group">
      {/* tape strip */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4 bg-yellow-100/80 rounded-sm shadow-sm"
        style={{ transform: 'translateX(-50%) rotate(-2deg)' }} />
      {/* photo */}
      <div className="aspect-square overflow-hidden rounded-sm">
        <img src={src} alt={caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      {/* caption */}
      <p className="absolute bottom-2 md:bottom-3 inset-x-2 text-center text-gray-600"
        style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem' }}>
        {caption}
      </p>
    </motion.div >
  )
}

/* ── Dynamic Age Counter ── */
const BIRTHDAY = new Date(2002, 10, 14) // 14 Nov 2002 (month is 0-indexed)

function getAge() {
  const now = new Date()
  let years = now.getFullYear() - BIRTHDAY.getFullYear()
  let months = now.getMonth() - BIRTHDAY.getMonth()
  let days = now.getDate() - BIRTHDAY.getDate()
  if (days < 0) {
    months--
    const prev = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prev.getDate()
  }
  if (months < 0) {
    years--
    months += 12
  }
  return { years, months, days }
}

const AgeCounter = () => {
  const [age, setAge] = useState(getAge)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => setAge(getAge()), 60000) // update every minute
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div ref={ref} className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}>
      <p className="text-pink-300/60 text-sm mb-3 uppercase tracking-widest">Being awesome for</p>
      <div className="flex justify-center gap-4 md:gap-6">
        {[
          { value: age.years, label: 'Years' },
          { value: age.months, label: 'Months' },
          { value: age.days, label: 'Days' },
        ].map((item, i) => (
          <motion.div key={item.label}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 md:p-6 border border-pink-300/15 min-w-[80px] md:min-w-[100px]">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              {item.value}
            </p>
            <p className="text-white/40 text-xs md:text-sm mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-white/30 text-xs mt-4 italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.7rem' }}>
        ...and counting! ✨
      </p>
    </motion.div>
  )
}

/* ── Confetti burst on scroll ── */
const confettiColors = ['#f472b6', '#60a5fa', '#f9a8d4', '#93c5fd', '#fbbf24', '#34d399', '#a78bfa', '#fb923c']

const ConfettiBurst = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [particles] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 600,
      y: -(200 + Math.random() * 400),
      rotate: Math.random() * 720 - 360,
      color: confettiColors[i % confettiColors.length],
      size: 6 + Math.random() * 8,
      duration: 1.5 + Math.random() * 1.5,
      delay: Math.random() * 0.4,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }))
  )

  return (
    <div ref={ref} className="relative w-full h-0 overflow-visible pointer-events-none">
      {inView && particles.map(p => (
        <motion.div key={p.id}
          className="absolute left-1/2 top-0"
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: [1, 1, 0], rotate: p.rotate, scale: [0, 1, 0.5] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
          style={{
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.6 : p.size,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            background: p.color,
          }}
        />
      ))}
    </div>
  )
}

/* ── Heartbeat splash screen ── */
const HeartbeatIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0) // 0=beating, 1=burst, 2=text

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500)  // burst after 1.5s
    const t2 = setTimeout(() => setPhase(2), 2300)  // show text
    const t3 = setTimeout(onComplete, 4500)          // exit
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a, #1a1f3d)' }}
      exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>

      {/* Ripple rings behind heart */}
      {phase === 0 && Array.from({ length: 3 }, (_, i) => (
        <motion.div key={`ripple-${i}`}
          className="absolute rounded-full border border-pink-400/30"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 3.5, 4], opacity: [0.4, 0.1, 0] }}
          transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* Main heart */}
      <motion.div className="relative z-10 text-center">
        {phase < 1 ? (
          /* Beating heart */
          <motion.div className="text-8xl md:text-9xl select-none"
            animate={{ scale: [1, 1.25, 1, 1.3, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}>
            💗
          </motion.div>
        ) : (
          /* Burst — heart splits into many small hearts */
          <>
            <motion.div className="text-8xl md:text-9xl select-none"
              initial={{ scale: 1 }}
              animate={{ scale: [1.4, 0], opacity: [1, 0] }}
              transition={{ duration: 0.5, ease: 'easeIn' }}>
              💗
            </motion.div>
            {Array.from({ length: 40 }, (_, i) => {
              const angle = (i / 40) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
              const dist = 150 + Math.random() * 500
              return (
                <motion.div key={`burst-${i}`}
                  className="absolute text-pink-300 select-none pointer-events-none"
                  style={{ left: '50%', top: '50%', fontSize: `${0.7 + Math.random() * 1.5}rem` }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: [1, 0.7, 0],
                    scale: [0.5, 1.5, 0.8],
                    rotate: Math.random() * 720 - 360,
                  }}
                  transition={{ duration: 1.8 + Math.random() * 0.8, ease: 'easeOut' }}>
                  ♥
                </motion.div>
              )
            })}
          </>
        )}
      </motion.div>

      {/* Text after burst */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <motion.p className="text-pink-300 text-2xl md:text-3xl font-semibold mb-3"
              style={{ fontFamily: "'Caveat', cursive", fontSize: '2rem' }}
              initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
              Someone special is about to read this...
            </motion.p>
            <motion.p className="text-pink-300/40 text-lg"
              style={{ fontFamily: "'Caveat', cursive" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              💕
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Main component ── */
export default function DeepanjaliLetter() {
  const navigate = useNavigate()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('surprise_auth') !== 'true') {
      navigate('/surprise', { replace: true })
    }
  }, [navigate])

  if (sessionStorage.getItem('surprise_auth') !== 'true') return null

  /* { emoji: '�', text: 'That hours-long first call' },
  { emoji: '😂', text: 'Surviving every Kalesh' },
  { emoji: '🤝', text: 'Always coming back stronger' },
  { emoji: '🥹', text: 'Through every tough time' },
  { emoji: '❤️', text: '4 years & counting' },
  ] */

  return (
    <div className="overflow-x-hidden" style={{ background: '#0f172a' }}>
      <AnimatePresence>
        {showSplash && <HeartbeatIntro onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <div className="min-h-screen relative"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 15%, #1a1f3d 35%, #1e293b 55%, #0f172a 75%, #0f172a 100%)' }}>

        {/* Floating particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 35 }, (_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`, height: `${2 + Math.random() * 3}px`,
                background: ['#f472b6', '#60a5fa', '#f9a8d4', '#93c5fd'][i % 4],
              }}
              animate={{ opacity: [0, 0.4, 0], y: [0, -25, 0] }}
              transition={{ duration: 5 + Math.random() * 4, delay: Math.random() * 6, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Floating hearts background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div key={i}
              className="absolute text-pink-300 select-none"
              style={{ left: `${Math.random() * 100}%`, bottom: '-5%', fontSize: `${1 + Math.random() * 2}rem` }}
              animate={{ y: [0, -window.innerHeight * 1.2], rotate: [0, 20, -20, 0], opacity: [0, 0.4, 0.4, 0] }}
              transition={{ duration: 6 + Math.random() * 4, delay: i * 1.5, repeat: Infinity, ease: 'easeOut' }}>
              ♥
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10 py-16 md:py-24">

          {/* ── Header ── */}
          <motion.div className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: showSplash ? 4.5 : 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 bg-clip-text text-transparent font-display leading-tight">
              Happy Birthday,<br />DeepaBoiii! 🎉
            </h1>
            <motion.div className="h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-blue-500"
              initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 1, duration: 0.8 }} />
            <p className="text-pink-300/40 text-sm mt-4 italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>
              Scroll down to read your letter...
            </p>
          </motion.div>

          {/* ── Age Counter ── */}
          <AgeCounter />

          {/* ── Big letter section ── */}
          <motion.div className="mb-24"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-14 border border-pink-300/15 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent font-display">Something I've Been Meaning to Say...</h2>
              </div>
              <div className="space-y-7 leading-relaxed text-justify"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem', lineHeight: 2.2, letterSpacing: '0.01em' }}>
                <p className="text-pink-300/70 italic" style={{ fontSize: '1.9rem' }}>Hey Deepa boi,</p>

                <p className="text-white/80">
                  Yeah, I thought of making something that could be treasured forever and that either of us could revisit whenever we feel like it. This is just a small gesture from me to you on your special day… ❤️
                </p>
                <p className="text-white/80">
                  You are one of the most amazing people I have ever met in my life. You have always been my support system during my tough times. You are the person who has always shared my happiness as if it were your own. I have always been grateful to you for that.
                </p>
                <p className="text-white/80">
                  I still remember those days when we first talked to each other on Insta, and the very next day, we were on an hours-long call. Ussi time se hamari kaafi vibe match hoti aa rahi hai. 😂❤️ Kaafi problems face kari hain humne saath mein unn 4 saalon mein. Kaafi saare jhagde, losing friends, downfalls... But one thing that never changed was us. We have always come back stronger together after every &quot;Kalesh&quot;. 😂😂😂
                </p>
                <p className="text-white/80">
                  It would have been so difficult for me to get through those 4 years if you hadn&apos;t been there with me, and I am still in your debt. I think woh kabhi chuka nahi paaunga main. 🥹🥹🥹 We have been doing so good so far. I wish we could continue to be the same forever... I want to see more of us being together. There are so many things I want to do and experience with you. ❤️
                </p>
                <p className="text-white/80">
                  You know what? I am always afraid maybe things won&apos;t remain the same between us after some time. Currently, you are my priority, Deepa boi. I would do anything, anytime, anywhere for you. But soon, time will change. There will be some new girl in my life, kisi na kisi se toh shaadi karwa degi mummy. 😂 Ya maan le, tere ghar wale karwa dein tera rishta kisi se, and stuff. Things will have to change from that point onwards. Priorities will have to change.
                </p>
                <p className="text-white/80">
                  It feels so sad that you and I might not be able to remain the same as we are right now. Hum nahi de paayenge ek doosre ko utna time jitna hum abhi de rahe hain ya de sakte hain. I hate and fear this possibility a lot. I agree, it&apos;s life, and it has to take turns. We have to keep moving forward. But yaar, Deepa boi, do we seriously have to do this??? Why can&apos;t we be together???
                </p>
                <p className="text-white/80">
                  I still want to give us a chance. Kaafi time se hum saath mein hain, kaafi samajhte hain ek doosre ko hum. Pyaar hi toh karna hota hai, woh pehle se hi karte hain, thoda aur kar lengey. 🥹🥹❤️ Baaki toh we&apos;ll figure out yaar. Samajhdaar log hain hum. If things work out, it&apos;s great. If they don&apos;t, it&apos;s alright, Deepa boi. We will still be the friends we have always been. At least, it&apos;s not like we didn&apos;t try. At least, we can say we tried and failed. At least, this is how I think. Do let me know what you think about this. 🙃🙃
                </p>
                <p className="text-white/80">
                  Nevertheless, whatever happens in the future is something we&apos;ll deal with when the time comes. But one thing Deepa, you have been a very great person to me. You always have been, and you always will be. No matter how things turn out or who comes into my life, you will always have a special place in my heart. 😊❤️
                </p>
                <p className="text-white/80">
                  Kabhi bhi life mein hum kahin bhi ho, jo bhi kar rahe ho, jiske saath bhi ho, it doesn&apos;t matter. Jab bhi zarurat pade, just a call away, Deepa boi. I will be right there with you, and that&apos;s my promise for life. 🤝❤️ Duniya itni bhi badi nahi hai, Deepa boi, ki humein aise alag kar paaye. 🌝🌝
                </p>
                <p className="text-white/80">
                  Just keep in mind, this Bot will always be with you... ❤️🤖
                </p>
                <p className="text-white/80">
                  Love you so much, Deepa boi! ♥️♥️♥️
                </p>
                <p className="text-white/80">
                  Wish you many, many happy returns of the day! 🎂🥳❤️
                </p>

                <p className="text-right text-white italic mt-10">Tera pyara bot.... 🤖</p>
              </div>
            </div>
          </motion.div>

          {/* ── Our Memories — Polaroids ── */}
          <motion.div className="mb-20"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-300 font-display">📸 Our Memories</h2>
              <p className="text-white/40 mt-2 text-sm">A few moments I never want to forget</p>
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {memories.map((m, i) => (
                <Polaroid key={i} index={i} src={m.src} caption={m.caption} rotate={m.rotate} />
              ))}
            </div>
          </motion.div>

          {/* ── Final wish ── */}
          <ConfettiBurst />
          <motion.div className="text-center pb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-10 border border-pink-300/15">
              <motion.p className="text-4xl mb-4"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>
                🥳
              </motion.p>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 bg-clip-text text-transparent font-display">
                Wishing you the happiest birthday ever!
              </p>
              <p className="text-white/30 text-sm mt-3">Built with sleepless nights & lots of love ❤️</p>
            </div>
          </motion.div>
        </div>
      </div >
    </div >
  )
}
