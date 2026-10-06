import { FaCode, FaServer, FaDatabase, FaNetworkWired, FaJava, FaCubes, FaLeaf, FaClock } from 'react-icons/fa'
import javaTopics from './notes/java.json'
import oopsTopics from './notes/oops.json'
import dsaTopics from './notes/dsa.json'
import osTopics from './notes/os.json'
import dbmsTopics from './notes/dbms.json'
import cnTopics from './notes/cn.json'
import springTopics from './notes/spring.json'
import temporalTopics from './notes/temporal.json'

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
    id: 'os',
    name: 'Operating Systems',
    icon: FaServer,
    topics: osTopics,
  },
  {
    id: 'dbms',
    name: 'Database Management Sysmtem',
    icon: FaDatabase,
    topics: dbmsTopics,
  },
  {
    id: 'spring',
    name: 'Spring & Spring Boot',
    icon: FaLeaf,
    topics: springTopics,
  },
  {
    id: 'temporal',
    name: 'Temporal',
    icon: FaClock,
    topics: temporalTopics,
  },
]
