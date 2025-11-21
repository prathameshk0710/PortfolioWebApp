import {
    FaReact,
    FaNode,
    FaPython,
    FaJava,
    FaGitAlt,
    FaAws,
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaDatabase,
    FaAndroid,
    FaCloud,
    FaPuzzlePiece,
    FaTable,
  } from 'react-icons/fa'
  
  import {
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiExpress,
    SiTailwindcss,
    SiNextdotjs,
    SiRedux,
    SiGraphql,
    SiKubernetes,
    SiFirebase,
    SiMysql,
    SiRedis,
    SiDotnet,
    SiSpringboot,
    SiOpenai,
    SiKotlin,
    SiJira,
    SiBitbucket,
    SiTemporal,
    SiCplusplus,
    SiPython,
    SiConfluence,
    SiNumpy,
    SiAnaconda,
  } from 'react-icons/si'

import { 
    GiBrain 
} from 'react-icons/gi'

import { 
    MdOutlineAutoGraph 
} from 'react-icons/md'


  
  export const techCategories = [
    {
        category: 'Backend',
        technologies: [
            { name: 'Java', icon: FaJava, color: 'text-orange-600' },
            { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
            { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-900 dark:text-white' },
            { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
            { name: 'C# (.NET)', icon: SiDotnet, color: 'text-purple-600' },
            { name: 'C / C++', icon: SiCplusplus, color: 'text-gray-800 dark:text-white' }, // still placeholder
        ],
    },
    {
        category: 'Databases',
        technologies: [
            { name: 'YugabyteDB', icon: FaDatabase, color: 'text-purple-600' }, // Custom icon needed
            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
            { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
            { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        ],
    },
    {
        category: 'DevOps & Cloud',
        technologies: [
            { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
            { name: 'GCP', icon: FaCloud, color: 'text-blue-600' },
            { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
            { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
            { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
            { name: 'Dapr', icon: FaPuzzlePiece, color: 'text-indigo-500' }, // generic but okay
            { name: 'Redis', icon: SiRedis, color: 'text-red-600' },
        ],
    },
    {
        category: 'Workflow & Tools',
        technologies: [
          { name: 'Temporal', icon: SiTemporal, color: 'text-white-800' },
          { name: 'Jira', icon: SiJira, color: 'text-blue-600' },
          { name: 'Bitbucket', icon: SiBitbucket, color: 'text-blue-700' },
          { name: 'Confluence', icon: SiConfluence, color: 'text-blue-500' },
        ],
      },
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
    },
    {
      category: 'Mobile & ML',
      technologies: [
        { name: 'Kotlin', icon: SiKotlin, color: 'text-blue-700' },
        { name: 'Machine Learning', icon: SiOpenai, color: 'text-green-700' },
        { name: 'NumPy', icon: SiNumpy, color: 'text-blue-500' },
        { name: 'Pandas', icon: FaTable, color: 'text-yellow-600' },
        { name: 'Anaconda', icon: SiAnaconda, color: 'text-green-500' },
        { name: 'NLTK', icon: GiBrain, color: 'text-blue-600' },
        { name: 'Scikit-Learn', icon: MdOutlineAutoGraph, color: 'text-orange-500' },
      ],
    }
  ]
  