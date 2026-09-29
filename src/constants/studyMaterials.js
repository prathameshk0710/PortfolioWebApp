import { FaCode, FaServer, FaDatabase, FaNetworkWired, FaJava, FaCubes } from 'react-icons/fa'
import javaTopics from './notes/java.json'
import oopsTopics from './notes/oops.json'
import dsaTopics from './notes/dsa.json'
import osTopics from './notes/os.json'
import dbmsTopics from './notes/dbms.json'
import cnTopics from './notes/cn.json'

export const studyMaterials = [
  {
    id: 'java',
    name: 'Java',
    icon: FaJava,
    topics: javaTopics,
  },
  {
    id: 'oops',
    name: 'OOPs Concepts',
    icon: FaCubes,
    topics: oopsTopics,
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: FaCode,
    topics: dsaTopics,
  },
  {
    id: 'os',
    name: 'Operating Systems',
    icon: FaServer,
    topics: osTopics,
  },
  {
    id: 'dbms',
    name: 'Database Management',
    icon: FaDatabase,
    topics: dbmsTopics,
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    icon: FaNetworkWired,
    topics: cnTopics,
  },
]
