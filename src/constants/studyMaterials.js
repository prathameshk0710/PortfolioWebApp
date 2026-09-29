import { FaCode, FaServer, FaDatabase, FaNetworkWired, FaJava } from 'react-icons/fa'

export const studyMaterials = [
  {
    id: 'java',
    name: 'Java',
    icon: FaJava,
    topics: [
      // ── OOP Fundamentals ──
      {
        heading: 'Object Creation & the "new" Keyword',
        subheading: 'What happens behind the scenes when you create an object',
        description:
          'When you write new MyClass(), Java performs five steps in sequence:\n\n1. A new instance of the class is created in memory.\n2. Space is allocated on the heap to store its fields.\n3. All fields receive their default values — numeric types get 0, booleans get false, and object references get null.\n4. The constructor runs, allowing you to set initial values or perform setup logic.\n5. A reference (memory address) to the newly created object is returned and stored in your variable.\n\nYou can also create objects without using "new":\n• Reflection — use Class.forName("...").getDeclaredConstructor().newInstance() to create instances dynamically at runtime.\n• clone() — call obj1.clone() to copy an existing object. The class must implement the Cloneable interface.\n• Deserialization — convert stored data (e.g., JSON or byte stream) back into an object using tools like ObjectMapper.readValue(json, MyClass.class).\n• Factory Method — call a static method like MyClass.getInstance() that internally handles the object creation for you.',
        image: '',
      },
      {
        heading: 'Object vs Object Reference',
        subheading: 'Understanding the difference between heap data and stack pointers',
        description:
          'An object and its reference are two different things.\n\nAn object is the actual data — it lives on the heap and is created when you use the "new" keyword. A reference, on the other hand, is just a variable stored on the stack that holds the memory address of where the object lives.\n\nThink of it like a house and its address. The house is the object (real data), and the address written on a piece of paper is the reference (pointer to the data).\n\nSetting a reference to null does not delete the object. It simply removes the link between the variable and the object. The object still exists in memory, but since nothing points to it anymore, the Garbage Collector will eventually clean it up.\n\nYou can even create a class with no fields or methods. Java will still generate a .class file and a default constructor for it. Such a class is called a Marker Class — it exists purely to represent a type without carrying any data or behavior.',
        image: '',
      },
      {
        heading: 'Encapsulation',
        subheading: 'More than just private fields — it is about protecting data integrity',
        description:
          'A common misconception is that encapsulation is just about making variables private. That is only part of the picture.\n\nEncapsulation means bundling the data (fields) and the methods that work on that data into a single unit (a class), while controlling how the outside world can access or modify the internal state.\n\nHaving private fields with public setters gives you basic encapsulation, but it is not complete. If your setter allows any value without checking, the data is not truly protected. Real encapsulation includes validation and business rules inside your setters.\n\nFor example, a setAge(int age) method should reject negative values instead of blindly accepting whatever is passed in. The goal is to ensure the object always stays in a valid state.',
        image: '',
      },
      {
        heading: 'Abstraction vs Encapsulation',
        subheading: 'Two pillars of OOP that serve different purposes',
        description:
          'These two concepts are often confused, but they solve different problems.\n\nEncapsulation is about hiding data and controlling access to it. It answers the question: "How is the internal state protected?" You achieve it through private fields and getter/setter methods with validation.\n\nAbstraction is about hiding the implementation details and exposing only what the user needs. It answers the question: "What does this component do?" You achieve it through abstract classes and interfaces.\n\nA simple analogy: think of driving a car. When you press the accelerator, you do not need to know how the engine, fuel injection, and transmission work together — that complexity is abstracted away. Meanwhile, the engine is sealed under the hood where you cannot directly tamper with its parts — that is encapsulation.',
        image: '',
      },
      {
        heading: 'Abstract Class vs Interface',
        subheading: 'Choosing the right tool for inheritance and contracts',
        description:
          'An abstract class lets you write partial implementations — some methods can have full code while others are left abstract for subclasses to complete. It can also have constructors, instance variables, and any access modifier. Use it when your classes are closely related and share common behavior.\n\nAn interface defines a contract — it tells you what a class should do, but not how. By default, all methods are public and abstract (though Java 8 and above allow default and static methods). A class can implement multiple interfaces, which is how Java supports a form of multiple inheritance.\n\nWhen to use which:\n• Choose an abstract class when you need shared state, code reuse, or constructor control among related classes.\n• Choose an interface when you want loose coupling, need to define a capability that unrelated classes can share, or require multiple inheritance.',
        image: '',
      },
      {
        heading: 'Multiple Inheritance & Diamond Problem',
        subheading: 'Why Java allows it with interfaces but not with classes',
        description:
          'Java does not allow a class to extend more than one class. The reason is the Diamond Problem: if two parent classes define the same method, the child class would not know which version to use, leading to ambiguity.\n\nHowever, Java does allow a class to implement multiple interfaces. This works because interfaces traditionally only define method signatures without providing implementations. When the implementing class writes the method body, there is no confusion about which code runs.\n\nWith Java 8, interfaces gained the ability to have default methods (methods with a body). If two interfaces provide conflicting default methods, the implementing class is required to override the method and explicitly resolve the conflict. This keeps things unambiguous.',
        image: '',
      },
      {
        heading: 'Anonymous Class & Functional Interface',
        subheading: 'Quick inline implementations and the foundation for lambdas',
        description:
          'An anonymous class is a class without a name. You declare it and create an instance of it in a single expression. It is useful when you need a one-time implementation of an interface or abstract class without the overhead of creating a separate file.\n\nExample: Runnable r = new Runnable() { public void run() { /* code here */ } };\n\nA functional interface is an interface that has exactly one abstract method. Examples include Runnable, Comparator, and Predicate. You can annotate them with @FunctionalInterface to enforce this rule at compile time.\n\nBecause a functional interface has only one method to implement, Java lets you replace the verbose anonymous class syntax with a compact lambda expression:\nRunnable r = () -> System.out.println("Hello");\n\nThis makes your code shorter and more readable.',
        image: '',
      },
      {
        heading: 'Marker Interface & Marker Class',
        subheading: 'Empty interfaces and classes that carry special meaning',
        description:
          'A marker interface is an interface that has no methods at all. It acts as a tag to signal something special about a class to the JVM or a framework.\n\nThe most well-known examples are:\n• Serializable — tells the JVM that objects of this class can be converted to a byte stream and saved or transmitted.\n• Cloneable — tells the JVM that calling clone() on objects of this class is allowed.\n\nThe JVM or framework checks for these markers using instanceof and changes its behavior accordingly.\n\nSimilarly, a marker class is a class with no fields or methods. It exists purely to represent a type — useful in scenarios where you need a class to act as a label or a placeholder without carrying any data.',
        image: '',
      },
      // ── Polymorphism ──
      {
        heading: 'Method Overloading vs Overriding',
        subheading: 'Compile-time vs runtime polymorphism — how Java decides which method to call',
        description:
          'Method Overloading (compile-time polymorphism):\nMultiple methods in the same class share the same name but differ in their parameter lists — either by the number of parameters, their types, or their order. The compiler decides which version to call based on the arguments you pass. Note that changing only the return type is not enough to distinguish overloaded methods.\n\nMethod Overriding (runtime polymorphism):\nA subclass provides its own version of a method that already exists in the parent class. The method must have the same name, same parameters, and the same (or a covariant) return type. The JVM decides which version to run at runtime based on the actual type of the object, not the reference type.\n\nImportant: you cannot override methods that are declared as static, final, or private.',
        image: '',
      },
      {
        heading: 'Access Modifiers',
        subheading: 'Controlling who can see and use your code',
        description:
          'Java provides four levels of access control, from most restrictive to least restrictive:\n\n• private — visible only within the same class. Nothing outside can see it.\n• default (no keyword written) — visible to all classes within the same package, but invisible to classes in other packages.\n• protected — visible within the same package, and also visible to subclasses even if they are in a different package.\n• public — visible everywhere, to any class in any package.\n\nIn interfaces, methods are public by default, and fields are always public, static, and final.',
        image: '',
      },
      // ── Strings & Important Classes ──
      {
        heading: '== vs .equals()',
        subheading: 'Reference equality vs value equality — a critical distinction',
        description:
          'The == operator compares memory addresses. It checks whether two references point to the exact same object in memory.\n\nThe .equals() method compares values. It checks whether two objects are logically equivalent based on their content.\n\nThis difference matters most with Strings:\n\nString a = "hello"; String b = "hello";\na == b is true because both point to the same entry in the String Pool.\na.equals(b) is also true because the content matches.\n\nString c = new String("hello");\na == c is false because "new" creates a separate object on the heap, even though the content is the same.\na.equals(c) is true because the content is identical.\n\nRule of thumb: always use .equals() when comparing object values. Reserve == for checking if two references point to the exact same instance.',
        image: '',
      },
      {
        heading: 'String Pool & Immutability',
        subheading: 'Why Strings behave differently from other objects',
        description:
          'Strings in Java are immutable — once a String object is created, its value can never be changed. Every time you modify a String (like concatenation), a brand new String object is created in memory.\n\nThe String Pool is a special area in heap memory where Java stores String literals for reuse. When you write "hello" in your code, Java first checks the pool. If "hello" already exists there, it reuses the same reference instead of creating a new object. This is why "hello" == "hello" returns true — both point to the same pooled object.\n\nUsing new String("hello") bypasses the pool and creates a fresh object on the heap. You can move it into the pool later by calling intern().\n\nWhy are Strings immutable?\n• Thread safety — immutable objects are inherently safe to share across threads.\n• Caching — the hashCode can be computed once and reused.\n• Security — Strings are used for class loading, database URLs, and credentials. Immutability prevents tampering.\n• Pool optimization — sharing is only safe because the content can never change.',
        image: '',
      },
      {
        heading: 'StringBuilder vs StringBuffer',
        subheading: 'Choosing the right mutable alternative to String',
        description:
          'When you need to modify strings frequently (like building a string inside a loop), using String creates a new object on every modification, which is inefficient. Both StringBuilder and StringBuffer solve this by providing mutable string objects.\n\nStringBuffer is synchronized, meaning it is thread-safe. If one thread is executing a method on a StringBuffer, no other thread can access it at the same time. This safety comes at the cost of performance due to locking overhead.\n\nStringBuilder is not synchronized, so it is not thread-safe. However, this makes it significantly faster in single-threaded scenarios since there is no locking overhead.\n\nIn practice, most string manipulation happens within a single thread, so StringBuilder is the better choice in the majority of cases. Use StringBuffer only when multiple threads need to modify the same string object simultaneously.',
        image: '',
      },
      // ── Keywords & Internals ──
      {
        heading: 'static Keyword',
        subheading: 'Members that belong to the class itself, not to any object',
        description:
          'When you mark something as static, it belongs to the class rather than to any specific instance of that class.\n\n• A static variable is shared across all objects of the class. There is only one copy in memory, no matter how many objects you create.\n• A static method can be called directly using the class name without creating an object. However, it cannot access instance variables or instance methods — it can only work with other static members.\n• A static block runs once when the class is first loaded into memory. It is typically used for one-time initialization.\n• A static inner class does not require an instance of the outer class to be created.\n\nA class that contains only static members is technically valid in Java, but it behaves more like a utility or procedural module than a true object-oriented class, since it does not rely on objects with individual state and behavior.',
        image: '',
      },
      {
        heading: 'final, finally, finalize',
        subheading: 'Three keywords that sound alike but do completely different things',
        description:
          'final is a keyword used to create constants and restrict modification:\n• A final variable cannot be reassigned after initialization — it acts as a constant.\n• A final method cannot be overridden by any subclass.\n• A final class cannot be extended at all (e.g., String and Integer are final classes).\n\nfinally is a block that is used with try-catch. It always executes after the try and catch blocks, regardless of whether an exception was thrown or not. It is the ideal place for cleanup tasks like closing database connections, file streams, or network sockets.\n\nfinalize() is a method that the Garbage Collector calls on an object just before destroying it. However, it has been deprecated since Java 9 because there is no guarantee about when (or even if) it will be called. The recommended alternative is to use try-with-resources for cleanup.',
        image: '',
      },
      {
        heading: 'volatile Keyword',
        subheading: 'Ensuring changes to a variable are visible across all threads',
        description:
          'In a multi-threaded program, each thread may keep its own cached copy of a variable for performance. This means one thread might update a variable, but another thread might still see the old value from its cache.\n\nMarking a variable as volatile tells the JVM: "Do not cache this variable locally in any thread. Always read it from and write it to main memory."\n\nThis guarantees two things:\n• Visibility — every thread always sees the most recent value.\n• Ordering — the JVM will not reorder instructions around the volatile variable in a way that could cause unexpected behavior.\n\nHowever, volatile does not make operations atomic. For example, count++ involves reading, incrementing, and writing — three separate steps that can still be interleaved by other threads. For atomic operations, use AtomicInteger, synchronized blocks, or explicit locks.',
        image: '',
      },
      {
        heading: 'Type Conversion (Casting)',
        subheading: 'How Java handles converting between different data types',
        description:
          'Widening (implicit conversion) happens when you assign a smaller type to a larger type. Java does this automatically because there is no risk of losing data.\nbyte → short → int → long → float → double\nExample: int x = 10; double d = x; — the int is automatically promoted to a double.\n\nNarrowing (explicit conversion) happens when you assign a larger type to a smaller type. You must do this manually using a cast, and data may be lost.\nExample: double d = 9.8; int x = (int) d; — the decimal part is truncated, so x becomes 9.\n\nFor objects, casting works along the inheritance hierarchy:\n• Upcasting (implicit) — assigning a child object to a parent reference: Animal a = new Dog(); This is always safe.\n• Downcasting (explicit) — assigning a parent reference back to a child type: Dog d = (Dog) a; This can throw a ClassCastException at runtime if the actual object is not of the expected type.',
        image: '',
      },
      {
        heading: 'System.out.println — Decoded',
        subheading: 'Breaking down Java\'s most commonly used statement',
        description:
          'This single line involves three separate components:\n\n• System is a final class in the java.lang package. It provides access to system-level resources like standard input, standard output, and environment properties.\n\n• out is a static field inside the System class. Its type is PrintStream, and it represents the standard output stream — typically your console or terminal.\n\n• println is a method defined in the PrintStream class. It prints the given data to the output stream and adds a newline character at the end.\n\nSo when you write System.out.println("Hello"), you are accessing the System class, getting its static PrintStream field called out, and calling the println method on it to print "Hello" followed by a new line.',
        image: '',
      },
      // ── Exception Handling ──
      {
        heading: 'Exception Handling',
        subheading: 'How Java deals with errors — checked, unchecked, and best practices',
        description:
          'Java organizes errors and exceptions in a hierarchy rooted at Throwable:\n• Error — serious problems the application should not try to handle (e.g., OutOfMemoryError, StackOverflowError).\n• Exception — problems that your code can and should handle. These are further divided into:\n  → Checked exceptions — the compiler forces you to handle them (e.g., IOException, SQLException). You must use try-catch or declare them with throws.\n  → Unchecked exceptions (RuntimeException) — the compiler does not enforce handling (e.g., NullPointerException, ArrayIndexOutOfBoundsException). These usually indicate programming bugs.\n\nKey constructs:\n• try-catch-finally — wrap risky code in try, handle specific exceptions in catch, and run cleanup code in finally.\n• throw — explicitly throw an exception from your code.\n• throws — declare in a method signature that it may throw certain exceptions.\n• try-with-resources — automatically closes resources like streams and connections when the try block finishes. The resource must implement AutoCloseable.\n\nYou can also create your own exceptions by extending Exception (for checked) or RuntimeException (for unchecked).',
        image: '',
      },
      // ── JVM & Memory ──
      {
        heading: 'JVM Architecture & Memory Areas',
        subheading: 'How Java code goes from source file to execution',
        description:
          'When you run a Java program, several memory areas work together:\n\n• Heap — the shared memory area where all objects and their instance variables live. All threads in the application access the same heap.\n• Stack — each thread gets its own stack. It stores local variables, method call frames, and object references. When a method finishes, its stack frame is removed.\n• Method Area (Metaspace since Java 8) — stores class-level data: class metadata, static variables, and the String Pool.\n• PC Register — each thread has its own Program Counter register that tracks the address of the instruction currently being executed.\n• Native Method Stack — used when Java code calls native (C/C++) methods through JNI.\n\nThe journey from code to execution:\nYou write a .java file → the javac compiler converts it into a .class file containing bytecode → the JVM loads the bytecode using a ClassLoader → the Bytecode Verifier checks it for safety → the JIT (Just-In-Time) Compiler converts frequently used bytecode into native machine code for faster execution.',
        image: '',
      },
      {
        heading: 'Garbage Collection',
        subheading: 'How Java automatically manages heap memory',
        description:
          'Garbage Collection (GC) is an automatic process that frees up heap memory by removing objects that are no longer reachable — meaning no active reference in the program points to them.\n\nKey things to know:\n• GC only works on heap memory. Stack memory is automatically freed when a method returns.\n• You cannot force garbage collection. Calling System.gc() is just a request that the JVM may choose to ignore.\n• An object becomes eligible for GC when all references to it are removed, set to null, or go out of scope.\n\nCommon GC algorithms:\n• Serial GC — uses a single thread to perform collection. Simple but pauses the entire application (stop-the-world).\n• Parallel GC — uses multiple threads for young generation collection. Better throughput for multi-core systems.\n• G1 GC (Garbage-First) — divides the heap into regions and prioritizes collecting the regions with the most garbage. It has been the default GC since Java 9.\n• ZGC — designed for ultra-low pause times (under 10ms), available from Java 11 onward. Ideal for latency-sensitive applications.',
        image: '',
      },
      // ── Collections Framework ──
      {
        heading: 'Collections Framework Overview',
        subheading: 'Java\'s built-in toolkit for working with groups of objects',
        description:
          'The Collections Framework is a set of interfaces and classes that provide ready-made implementations of commonly used data structures like lists, sets, queues, and maps.\n\nThe hierarchy is organized as follows:\n• Collection (root interface)\n  → List — ordered, allows duplicates. Implementations: ArrayList, LinkedList, Vector.\n  → Set — unordered (mostly), no duplicates. Implementations: HashSet, LinkedHashSet, TreeSet.\n  → Queue — designed for holding elements before processing. Implementations: PriorityQueue, ArrayDeque.\n\n• Map (separate interface, not part of Collection) — stores key-value pairs. Implementations: HashMap, LinkedHashMap, TreeMap, Hashtable.\n\nOne important rule: all collections work with objects, not primitive types. So you cannot store int, double, or boolean directly. Instead, Java uses wrapper classes (Integer, Double, Boolean) and automatically converts between primitives and wrappers through autoboxing and unboxing.',
        image: '',
      },
      {
        heading: 'ArrayList — Internal Working',
        subheading: 'How Java\'s most popular list works under the hood',
        description:
          'ArrayList is a resizable array implementation. It extends AbstractList and implements the List interface.\n\nAt its core, ArrayList is backed by a plain Java array. When you create a new ArrayList, no memory is allocated yet — the internal array is created with a default capacity of 10 only when you add the first element.\n\nWhen the array is full and you add another element, ArrayList creates a new array that is 50% larger than the current one, copies all existing elements to the new array, and then adds the new element. This resizing is why add operations are O(1) amortized — most adds are instant, but occasionally one triggers a costly copy.\n\nPerformance characteristics:\n• Random access (get by index) — O(1), since arrays support direct index-based access.\n• Add at the end — O(1) amortized.\n• Add or remove at a specific index — O(n), because elements after that index need to be shifted.\n• Search — O(n), requires scanning through elements.\n\nArrayList is not thread-safe. In multi-threaded scenarios, you can use Vector (locks the entire list — slow), Collections.synchronizedList() (synchronized wrapper), or CopyOnWriteArrayList (best for read-heavy workloads).',
        image: '',
      },
      {
        heading: 'CopyOnWriteArrayList',
        subheading: 'A thread-safe list optimized for scenarios where reads far outnumber writes',
        description:
          'CopyOnWriteArrayList is designed to handle the ConcurrentModificationException problem that occurs when one thread modifies a list while another is iterating over it.\n\nThe key idea is simple: read operations always work on a snapshot (a copy) of the underlying array. This means any number of threads can read simultaneously without any locking or synchronization, making reads extremely fast.\n\nWhen a write operation happens (add, set, or remove), the list creates a fresh copy of the entire internal array, applies the modification to the copy, and then replaces the original array reference. A lock ensures only one write happens at a time.\n\nThis approach is excellent when reads are far more frequent than writes — for example, a configuration list that is read by many threads but updated rarely. However, it is a poor choice when writes are frequent, because copying the entire array on every modification becomes expensive.\n\nCompared to alternatives:\n• Vector locks on every operation (both read and write), making it slow across the board.\n• Collections.synchronizedList() has the same locking problem.\n• CopyOnWriteArrayList gives you lock-free reads with copy-on-write safety — the best read performance of the three.',
        image: '',
      },
      {
        heading: 'HashMap — Internal Working',
        subheading: 'How hashing, buckets, and collision resolution work together',
        description:
          'A HashMap stores data as key-value pairs. Internally, it uses an array of "buckets," where each bucket can hold one or more entries.\n\nWhen you call put(key, value), Java computes the hashCode() of the key and uses it to determine which bucket the entry should go into. By default, a HashMap starts with 16 buckets and a load factor of 0.75, meaning it will resize (double the number of buckets) once 75% of them are occupied.\n\nEach entry in a bucket is stored as a Node containing four things: the hash code, the key, the value, and a pointer to the next node.\n\nCollision happens when two different keys end up in the same bucket (because their hash codes map to the same index). HashMap handles this as follows:\n• On put() — if the new key equals an existing key in the bucket (checked via equals()), the old value is replaced. If the keys are different, the new entry is added to the end of a linked list in that bucket.\n• On get() — Java computes the hash code, goes to the correct bucket, and walks through the linked list comparing keys using equals() until it finds a match.\n\nStarting with Java 8, when a single bucket accumulates more than 8 entries, the linked list is automatically converted into a balanced Red-Black Tree. This improves worst-case lookup from O(n) to O(log n).\n\nHashMap is not thread-safe. For concurrent access, use ConcurrentHashMap.',
        image: '',
      },
      {
        heading: 'ConcurrentHashMap',
        subheading: 'The recommended thread-safe map for concurrent applications',
        description:
          'ConcurrentHashMap is designed for situations where multiple threads need to read and write to a map simultaneously without corrupting data.\n\nThe simplest alternative, Collections.synchronizedMap(), wraps a regular HashMap and locks the entire map for every operation. This means only one thread can access the map at a time, which severely limits performance.\n\nConcurrentHashMap takes a smarter approach:\n• Read operations are fully concurrent — no locks are acquired, so any number of threads can read simultaneously.\n• Write operations lock only the specific bucket (or node, in Java 8+) being modified, not the entire map. This means writes to different buckets can happen in parallel.\n\nOther important differences from HashMap:\n• ConcurrentHashMap does not allow null keys or null values (HashMap allows both).\n• It provides thread-safe atomic operations like putIfAbsent(), computeIfAbsent(), and merge() — operations that check and modify in a single step without race conditions.',
        image: '',
      },
      {
        heading: 'HashSet',
        subheading: 'A collection that guarantees uniqueness using HashMap under the hood',
        description:
          'A HashSet stores unique elements only — adding a duplicate is silently ignored.\n\nInternally, HashSet is backed by a HashMap. Each element you add to the set becomes a key in the underlying map, and a shared dummy constant object is used as the value. Uniqueness is determined by the element\'s hashCode() and equals() methods — if two elements have the same hash code and are equal, only one is stored.\n\nKey characteristics:\n• Does not maintain insertion order. If you need order, use LinkedHashSet.\n• Allows one null element.\n• Average-case time complexity is O(1) for add, remove, and contains operations.\n• Not thread-safe. For concurrent access, use Collections.synchronizedSet() or ConcurrentHashMap.newKeySet().',
        image: '',
      },
      {
        heading: 'Comparable vs Comparator',
        subheading: 'Two ways to define sorting logic for your objects',
        description:
          'Comparable is built into the class itself. You implement the Comparable interface and override the compareTo() method to define a single, natural ordering. For example, a Student class might naturally sort by roll number. Methods like Collections.sort(list) and sorted collections like TreeSet and TreeMap use this ordering by default.\n\nComparator is external to the class. You create a separate Comparator object (or lambda) that defines how two objects should be compared using the compare() method. This lets you define multiple sorting strategies without modifying the original class — for example, sorting students by name in one place and by GPA in another.\n\nWhen to use which:\n• Use Comparable when there is one obvious, default way to sort your objects.\n• Use Comparator when you need multiple or ad-hoc sorting criteria, or when you cannot modify the class you want to sort.',
        image: '',
      },
      // ── Multithreading ──
      {
        heading: 'Multithreading Basics',
        subheading: 'Running multiple tasks concurrently within a single program',
        description:
          'A thread goes through five lifecycle states:\nNew (created but not started) → Runnable (ready to run, waiting for CPU) → Running (actively executing) → Blocked/Waiting (paused, waiting for a resource or signal) → Terminated (finished execution).\n\nThree ways to create a thread:\n• Extend the Thread class and override its run() method. Simple but inflexible — your class cannot extend any other class.\n• Implement the Runnable interface. This is the preferred approach since it keeps inheritance free for other purposes.\n• Implement the Callable interface. Similar to Runnable, but it can return a result and throw checked exceptions. Use it with Future to retrieve the result later.\n\nSynchronization prevents multiple threads from corrupting shared data:\n• The synchronized keyword locks a method or block so only one thread can execute it at a time.\n• wait() makes a thread release its lock and pause until another thread calls notify() or notifyAll().\n• These methods must be called from within a synchronized context.\n\nJava provides a full toolkit for thread safety: synchronized blocks, volatile variables, Atomic classes (like AtomicInteger), explicit Locks (like ReentrantLock), and thread-safe collections.',
        image: '',
      },
      // ── Java 8+ Features ──
      {
        heading: 'Java 8+ Features',
        subheading: 'The modern additions that changed how Java code is written',
        description:
          'Lambda Expressions allow you to write concise implementations of functional interfaces without creating anonymous classes. The syntax is (parameters) -> expression or (parameters) -> { statements }.\nExample: list.forEach(x -> System.out.println(x));\n\nThe Stream API lets you process collections in a declarative, pipeline-style manner using operations like filter, map, reduce, and collect. Streams use lazy evaluation — intermediate operations (like filter and map) only execute when a terminal operation (like collect or forEach) is called.\nExample: list.stream().filter(x -> x > 5).map(x -> x * 2).collect(Collectors.toList())\n\nOptional is a container that may or may not hold a value. It was introduced to reduce NullPointerException issues. Instead of returning null, a method can return Optional.empty(). You can then use methods like isPresent(), orElse(), orElseThrow(), map(), and flatMap() to work with the value safely.\n\nOther notable additions in Java 8: default methods in interfaces (allowing backward-compatible interface evolution), method references using the :: operator, and the new Date/Time API in the java.time package.',
        image: '',
      },
      // ── Design Patterns ──
      {
        heading: 'Singleton Pattern',
        subheading: 'Ensuring only one instance of a class exists in the entire application',
        description:
          'The Singleton pattern restricts a class to a single instance and provides a global access point to it. This is useful for objects like configuration managers, connection pools, or loggers.\n\nThe basic implementation involves three parts:\n• A private constructor that prevents other classes from creating instances.\n• A private static variable that holds the single instance.\n• A public static getInstance() method that returns the instance, creating it if it does not exist yet.\n\nMaking it thread-safe:\n• Eager initialization — the instance is created when the class is loaded. Simple and thread-safe, but the object is created even if it is never used.\n• Synchronized getInstance() — thread-safe, but every call pays the cost of synchronization.\n• Double-checked locking — uses volatile + synchronized. Only synchronizes during the first creation, making subsequent calls fast.\n• Bill Pugh method (static inner class) — lazy initialization that is thread-safe without using synchronized. Considered the cleanest approach.\n• Enum singleton — the simplest and most robust way. It is inherently serialization-safe and reflection-proof.\n\nSingleton can be broken by Reflection, Serialization, or Cloning. Use an enum or implement readResolve() to prevent this.',
        image: '',
      },
      {
        heading: 'Immutable Class',
        subheading: 'Creating objects whose state can never be changed after construction',
        description:
          'An immutable object is one whose internal state remains constant for its entire lifetime. Once created, it cannot be modified.\n\nTo create an immutable class, follow these five rules:\n1. Declare the class as final so it cannot be subclassed (subclasses could add mutable behavior).\n2. Make all fields private and final so they are assigned once and cannot be accessed or changed directly.\n3. Do not provide any setter methods.\n4. Initialize all fields through the constructor.\n5. If any field holds a reference to a mutable object (like a Date or List), return a deep copy from the getter instead of the original reference. This prevents external code from modifying the internal state.\n\nFamiliar examples of immutable classes in Java include String, Integer, and LocalDate.\n\nBenefits of immutability:\n• Inherently thread-safe — no synchronization needed since the state never changes.\n• Safe to use as HashMap keys — the hash code remains constant.\n• Can be freely shared and cached without defensive copying.\n• Makes code easier to understand and reason about since there are no hidden state changes.',
        image: '',
      },
      // ── Generics ──
      {
        heading: 'Generics',
        subheading: 'Writing type-safe, reusable code without casting',
        description:
          'Generics let you write classes, interfaces, and methods that work with any data type while still catching type errors at compile time. Without generics, you would use raw types and cast everywhere, which is error-prone and only fails at runtime.\n\nWith generics, a List<String> guarantees that only Strings can be added. If you try to add an Integer, the compiler stops you immediately — no ClassCastException at runtime.\n\nCommon type parameter conventions: T for a general type, E for elements, K for keys, V for values, and ? for wildcards.\n\nBounded types let you restrict what types can be used: <T extends Number> means T must be Number or one of its subclasses (Integer, Double, etc.).\n\nWildcards provide flexibility:\n• ? extends T (upper bound) — you can read items as type T, but you cannot add items. Think of it as "read-only."\n• ? super T (lower bound) — you can add items of type T, but reads come back as Object. Think of it as "write-friendly."\n• ? (unbounded) — accepts any type, but you can only read items as Object.\n\nType Erasure is an important concept to understand: generics are a compile-time feature only. At runtime, the JVM erases all generic type information. List<String> and List<Integer> become the same raw List. This is why you cannot use instanceof with generic types or create arrays of generic types.',
        image: '',
      },
    ],
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: FaCode,
    topics: [
      {
        heading: 'Arrays',
        subheading: 'Linear Data Structure — Contiguous Memory',
        description:
          'An array is a collection of elements stored at contiguous memory locations. It allows O(1) random access using an index. Arrays are the foundation of most data structures and are heavily used in competitive programming.\n\nKey operations:\n• Access — O(1)\n• Search — O(n)\n• Insertion at end — O(1) amortized\n• Insertion at position — O(n)\n• Deletion — O(n)',
        image: '',
      },
      {
        heading: 'Linked Lists',
        subheading: 'Dynamic Linear Data Structure',
        description:
          'A linked list is a sequence of nodes where each node stores data and a pointer to the next node. Unlike arrays, linked lists do not require contiguous memory and allow efficient insertions/deletions at any position.\n\nTypes:\n• Singly Linked List — each node points to next\n• Doubly Linked List — each node points to next and previous\n• Circular Linked List — last node points back to head',
        image: '',
      },
      {
        heading: 'Trees & Binary Search Trees',
        subheading: 'Hierarchical Data Structure',
        description:
          'A tree is a hierarchical structure with a root node and children. A Binary Search Tree (BST) maintains the property: left child < parent < right child, enabling O(log n) search, insert, and delete in balanced cases.\n\nCommon tree types:\n• Binary Tree — at most 2 children per node\n• AVL Tree — self-balancing BST\n• Red-Black Tree — balanced BST used in STL map/set\n• Segment Tree — range query structure',
        image: '',
      },
      {
        heading: 'Graphs',
        subheading: 'Non-Linear Data Structure',
        description:
          'A graph G = (V, E) consists of vertices and edges. Graphs model relationships and networks. Key algorithms include BFS, DFS, Dijkstra\'s shortest path, and Kruskal\'s/Prim\'s MST.\n\nRepresentations:\n• Adjacency Matrix — O(V²) space, O(1) edge lookup\n• Adjacency List — O(V+E) space, efficient traversal',
        image: '',
      },
    ],
  },
  {
    id: 'os',
    name: 'Operating Systems',
    icon: FaServer,
    topics: [
      {
        heading: 'Process Management',
        subheading: 'Processes, Threads & Scheduling',
        description:
          'A process is a program in execution with its own memory space. Threads are lightweight sub-units of a process sharing the same address space.\n\nCPU Scheduling Algorithms:\n• FCFS (First Come First Serve) — simple, non-preemptive\n• SJF (Shortest Job First) — optimal average waiting time\n• Round Robin — time-quantum based, preemptive\n• Priority Scheduling — based on priority values\n• MLFQ — Multi-Level Feedback Queue',
        image: '',
      },
      {
        heading: 'Memory Management',
        subheading: 'Virtual Memory, Paging & Segmentation',
        description:
          'The OS manages memory allocation for processes. Virtual memory allows processes to use more memory than physically available by swapping pages between RAM and disk.\n\nPage Replacement Algorithms:\n• FIFO — replace the oldest page\n• LRU (Least Recently Used) — replace least recently accessed\n• Optimal — replace page not needed for longest time (theoretical)',
        image: '',
      },
      {
        heading: 'Deadlocks',
        subheading: 'Conditions, Prevention & Detection',
        description:
          'A deadlock occurs when processes are stuck waiting for resources held by each other. Four necessary conditions (Coffman conditions):\n\n1. Mutual Exclusion — resource held exclusively\n2. Hold and Wait — holding one, waiting for another\n3. No Preemption — resources can\'t be forcibly taken\n4. Circular Wait — circular chain of waiting processes\n\nPrevention strategies break one or more of these conditions. Banker\'s algorithm is used for deadlock avoidance.',
        image: '',
      },
    ],
  },
  {
    id: 'dbms',
    name: 'Database Management',
    icon: FaDatabase,
    topics: [
      {
        heading: 'Normalization',
        subheading: 'Reducing Redundancy in Relational Databases',
        description:
          'Normalization organizes tables to minimize redundancy and dependency. Normal forms:\n\n• 1NF — Atomic values, no repeating groups\n• 2NF — 1NF + no partial dependencies\n• 3NF — 2NF + no transitive dependencies\n• BCNF — every determinant is a candidate key\n\nDenormalization is sometimes used for read-heavy workloads to improve query performance at the cost of redundancy.',
        image: '',
      },
      {
        heading: 'SQL Joins & Queries',
        subheading: 'Combining Data Across Tables',
        description:
          'Joins combine rows from two or more tables based on related columns.\n\nTypes of Joins:\n• INNER JOIN — only matching rows\n• LEFT JOIN — all from left + matching from right\n• RIGHT JOIN — all from right + matching from left\n• FULL OUTER JOIN — all rows from both tables\n• CROSS JOIN — cartesian product\n• SELF JOIN — table joined with itself',
        image: '',
      },
      {
        heading: 'Transactions & ACID Properties',
        subheading: 'Ensuring Data Integrity',
        description:
          'A transaction is a logical unit of work. ACID properties guarantee reliable processing:\n\n• Atomicity — all or nothing\n• Consistency — valid state transitions\n• Isolation — concurrent transactions don\'t interfere\n• Durability — committed data survives crashes\n\nIsolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.',
        image: '',
      },
    ],
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    icon: FaNetworkWired,
    topics: [
      {
        heading: 'OSI Model',
        subheading: 'Seven Layers of Networking',
        description:
          'The OSI (Open Systems Interconnection) model divides network communication into 7 layers:\n\n7. Application — HTTP, FTP, SMTP\n6. Presentation — encryption, compression\n5. Session — session management\n4. Transport — TCP, UDP\n3. Network — IP, routing\n2. Data Link — MAC, switching\n1. Physical — cables, signals\n\nThe TCP/IP model simplifies this into 4 layers: Application, Transport, Internet, Network Access.',
        image: '',
      },
      {
        heading: 'TCP vs UDP',
        subheading: 'Transport Layer Protocols',
        description:
          'TCP (Transmission Control Protocol):\n• Connection-oriented (3-way handshake)\n• Reliable — guarantees delivery and ordering\n• Flow control & congestion control\n• Used in: HTTP, FTP, Email\n\nUDP (User Datagram Protocol):\n• Connectionless\n• Unreliable — no delivery guarantee\n• Faster, lower overhead\n• Used in: DNS, video streaming, gaming',
        image: '',
      },
    ],
  },
]
