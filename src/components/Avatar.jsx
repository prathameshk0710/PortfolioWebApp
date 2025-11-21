import profileImage from '../assets/profile.jpg';

export default function Avatar() {
  return (
    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-inner">
      <img
        src={profileImage}
        alt="Profile"
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  );
}
