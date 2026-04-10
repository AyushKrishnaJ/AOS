/**
 * SPL Constants with documentation.
 *
 * Each constant maps to a documentation string (Markdown) that describes
 * its default value, category, and purpose. This enables rich hover and
 * autocomplete experiences in the extension.
 *
 * Source: eXpOS / eXpFS SPL Predefined Constants
 * Reference: https://exposnitc.github.io/support_tools-files/constants.html
 */
export const SPL_CONSTANTS = new Map<string, string>([

  // ─── Interrupt / Exception / Module Call Addresses ───────────────────

  ["EX_HANDLER",
    `**EX_HANDLER** — \`1024\`\n\nStarting address of the **Exception Handler** in memory.\n\n*Category: Interrupt & Exception Addresses*\n\nAlias: \`EXCEPTION\``],

  ["EXCEPTION",
    `**EXCEPTION** — \`1024\`\n\nStarting address of the **Exception Handler** in memory.\n\n*Category: Interrupt & Exception Addresses*\n\nAlias: \`EX_HANDLER\``],

  ["TIMER",
    `**TIMER** — \`2048\`\n\nStarting address of the **Timer Interrupt Routine** in memory.\n\n*Category: Interrupt & Exception Addresses*`],

  ["DISK",
    `**DISK** — \`3072\`\n\nStarting address of the **Disk Controller Interrupt Routine** in memory.\n\n*Category: Interrupt & Exception Addresses*`],

  ["CONSOLE",
    `**CONSOLE** — \`4096\`\n\nStarting address of the **Console Interrupt Routine** in memory.\n\n*Category: Interrupt & Exception Addresses*`],

  ["INT_4",
    `**INT_4** — \`5120\`\n\nStarting address of **Software Interrupt 4**.\n\nHandles system calls: **Create** (1), **Delete** (4).\n\n*Category: Interrupt Addresses*`],

  ["INT_5",
    `**INT_5** — \`6144\`\n\nStarting address of **Software Interrupt 5**.\n\nHandles system calls: **Seek** (6), **Open** (2), **Close** (3).\n\n*Category: Interrupt Addresses*`],

  ["INT_6",
    `**INT_6** — \`7168\`\n\nStarting address of **Software Interrupt 6**.\n\nHandles system call: **Read** (7).\n\n*Category: Interrupt Addresses*`],

  ["INT_7",
    `**INT_7** — \`8192\`\n\nStarting address of **Software Interrupt 7**.\n\nHandles system call: **Write** (5).\n\n*Category: Interrupt Addresses*`],

  ["INT_8",
    `**INT_8** — \`9216\`\n\nStarting address of **Software Interrupt 8**.\n\nHandles system call: **Fork** (8).\n\n*Category: Interrupt Addresses*`],

  ["INT_9",
    `**INT_9** — \`10240\`\n\nStarting address of **Software Interrupt 9**.\n\nHandles system call: **Exec** (9).\n\n*Category: Interrupt Addresses*`],

  ["INT_10",
    `**INT_10** — \`11264\`\n\nStarting address of **Software Interrupt 10**.\n\nHandles system call: **Exit** (10).\n\n*Category: Interrupt Addresses*`],

  ["INT_11",
    `**INT_11** — \`12288\`\n\nStarting address of **Software Interrupt 11**.\n\nHandles system calls: **Getpid** (11), **Getppid** (12), **Wait** (13), **Signal** (14).\n\n*Category: Interrupt Addresses*`],

  ["INT_12",
    `**INT_12** — \`13312\`\n\nStarting address of **Software Interrupt 12**.\n\nHandles system call: **Logout** (28).\n\n*Category: Interrupt Addresses*`],

  ["INT_13",
    `**INT_13** — \`14336\`\n\nStarting address of **Software Interrupt 13**.\n\nHandles system calls: **Semget** (17), **Semrelease** (18).\n\n*Category: Interrupt Addresses*`],

  ["INT_14",
    `**INT_14** — \`15360\`\n\nStarting address of **Software Interrupt 14**.\n\nHandles system calls: **SemLock** (19), **SemUnLock** (20).\n\n*Category: Interrupt Addresses*`],

  ["INT_15",
    `**INT_15** — \`16384\`\n\nStarting address of **Software Interrupt 15**.\n\nHandles system call: **Shutdown** (21).\n\n*Category: Interrupt Addresses*`],

  ["INT_16",
    `**INT_16** — \`17408\`\n\nStarting address of **Software Interrupt 16**.\n\nHandles system calls: **Newusr** (22), **Remusr** (23), **Setpwd** (24), **Getuname** (25), **Getuid** (26).\n\n*Category: Interrupt Addresses*`],

  ["INT_17",
    `**INT_17** — \`18432\`\n\nStarting address of **Software Interrupt 17**.\n\nHandles system call: **Login** (27).\n\n*Category: Interrupt Addresses*`],

  ["INT_18",
    `**INT_18** — \`19456\`\n\nStarting address of **Software Interrupt 18**.\n\nHandles system calls: **Test0** (96), **Test1** (97), **Test2** (98), **Test3** (99).\n\n*Category: Interrupt Addresses*`],

  // ─── Module Addresses & Aliases ──────────────────────────────────────

  ["MOD_0",
    `**MOD_0** — \`20480\`\n\nStarting address of **Module 0 (Resource Manager)**.\n\n*Category: Module Addresses*\n\nAlias: \`RESOURCE_MANAGER\``],

  ["RESOURCE_MANAGER",
    `**RESOURCE_MANAGER** — \`20480\`\n\nStarting address of the **Resource Manager** module (Module 0).\n\nManages acquisition and release of shared resources (buffers, disk, inodes, semaphores, terminal).\n\n*Category: Module Addresses*\n\nAlias: \`MOD_0\``],

  ["MOD_1",
    `**MOD_1** — \`21504\`\n\nStarting address of **Module 1 (Process Manager)**.\n\n*Category: Module Addresses*\n\nAlias: \`PROCESS_MANAGER\``],

  ["PROCESS_MANAGER",
    `**PROCESS_MANAGER** — \`21504\`\n\nStarting address of the **Process Manager** module (Module 1).\n\nManages process creation, termination, and cleanup.\n\n*Category: Module Addresses*\n\nAlias: \`MOD_1\``],

  ["MOD_2",
    `**MOD_2** — \`22528\`\n\nStarting address of **Module 2 (Memory Manager)**.\n\n*Category: Module Addresses*\n\nAlias: \`MEMORY_MANAGER\``],

  ["MEMORY_MANAGER",
    `**MEMORY_MANAGER** — \`22528\`\n\nStarting address of the **Memory Manager** module (Module 2).\n\nManages page allocation, deallocation, and swap operations.\n\n*Category: Module Addresses*\n\nAlias: \`MOD_2\``],

  ["MOD_3",
    `**MOD_3** — \`23552\`\n\nStarting address of **Module 3 (File Manager)**.\n\n*Category: Module Addresses*\n\nAlias: \`FILE_MANAGER\``],

  ["FILE_MANAGER",
    `**FILE_MANAGER** — \`23552\`\n\nStarting address of the **File Manager** module (Module 3).\n\nManages buffered read/write and file open/close operations.\n\n*Category: Module Addresses*\n\nAlias: \`MOD_3\``],

  ["MOD_4",
    `**MOD_4** — \`24576\`\n\nStarting address of **Module 4 (Device Manager)**.\n\n*Category: Module Addresses*\n\nAlias: \`DEVICE_MANAGER\``],

  ["DEVICE_MANAGER",
    `**DEVICE_MANAGER** — \`24576\`\n\nStarting address of the **Device Manager** module (Module 4).\n\nManages low-level disk and terminal I/O operations.\n\n*Category: Module Addresses*\n\nAlias: \`MOD_4\``],

  ["MOD_5",
    `**MOD_5** — \`25600\`\n\nStarting address of **Module 5 (Context Switch / Scheduler)**.\n\n*Category: Module Addresses*\n\nAliases: \`CONTEXT_SWITCH\`, \`SCHEDULER\``],

  ["CONTEXT_SWITCH",
    `**CONTEXT_SWITCH** — \`25600\`\n\nStarting address of the **Context Switch Module** (Module 5).\n\nPerforms the scheduling and context switch between processes.\n\n*Category: Module Addresses*\n\nAliases: \`MOD_5\`, \`SCHEDULER\``],

  ["SCHEDULER",
    `**SCHEDULER** — \`25600\`\n\nStarting address of the **Scheduler Module** (Module 5).\n\nPerforms the scheduling and context switch between processes.\n\n*Category: Module Addresses*\n\nAliases: \`MOD_5\`, \`CONTEXT_SWITCH\``],

  ["MOD_6",
    `**MOD_6** — \`26624\`\n\nStarting address of **Module 6 (Pager Module)**.\n\n*Category: Module Addresses*\n\nAlias: \`PAGER_MODULE\``],

  ["PAGER_MODULE",
    `**PAGER_MODULE** — \`26624\`\n\nStarting address of the **Pager Module** (Module 6).\n\nHandles swapping pages in and out of memory.\n\n*Category: Module Addresses*\n\nAlias: \`MOD_6\``],

  ["MOD_7",
    `**MOD_7** — \`27648\`\n\nStarting address of **Module 7 (Boot Module)**.\n\n*Category: Module Addresses*\n\nAlias: \`BOOT_MODULE\``],

  ["BOOT_MODULE",
    `**BOOT_MODULE** — \`27648\`\n\nStarting address of the **Boot Module** (Module 7).\n\nLoads the OS startup code and initializes system data structures.\n\n*Category: Module Addresses*\n\nAlias: \`MOD_7\``],

  // ─── System Call Numbers ─────────────────────────────────────────────

  ["INT_CREATE",
    `**INT_CREATE** — \`1\`\n\n**Create** system call number.\n\nCreates a new file in the filesystem. Handled by INT 4.\n\n*Category: System Call Numbers*`],

  ["INT_OPEN",
    `**INT_OPEN** — \`2\`\n\n**Open** system call number.\n\nOpens an existing file and returns a file descriptor. Handled by INT 5.\n\n*Category: System Call Numbers*`],

  ["INT_CLOSE",
    `**INT_CLOSE** — \`3\`\n\n**Close** system call number.\n\nCloses an open file descriptor. Handled by INT 5.\n\n*Category: System Call Numbers*`],

  ["INT_DELETE",
    `**INT_DELETE** — \`4\`\n\n**Delete** system call number.\n\nDeletes a file from the filesystem. Handled by INT 4.\n\n*Category: System Call Numbers*`],

  ["INT_WRITE",
    `**INT_WRITE** — \`5\`\n\n**Write** system call number.\n\nWrites data to the terminal or a file. Handled by INT 7.\n\n*Category: System Call Numbers*`],

  ["INT_SEEK",
    `**INT_SEEK** — \`6\`\n\n**Seek** system call number.\n\nMoves the file pointer to the specified position. Handled by INT 5.\n\n*Category: System Call Numbers*`],

  ["INT_READ",
    `**INT_READ** — \`7\`\n\n**Read** system call number.\n\nReads data from the terminal or a file. Handled by INT 6.\n\n*Category: System Call Numbers*`],

  ["INT_FORK",
    `**INT_FORK** — \`8\`\n\n**Fork** system call number.\n\nCreates a child process by duplicating the calling process. Handled by INT 8.\n\n*Category: System Call Numbers*`],

  ["INT_EXEC",
    `**INT_EXEC** — \`9\`\n\n**Exec** system call number.\n\nReplaces the current process with a new executable. Handled by INT 9.\n\n*Category: System Call Numbers*`],

  ["INT_EXIT",
    `**INT_EXIT** — \`10\`\n\n**Exit** system call number.\n\nTerminates the current process and releases its resources. Handled by INT 10.\n\n*Category: System Call Numbers*`],

  ["INT_GETPID",
    `**INT_GETPID** — \`11\`\n\n**Getpid** system call number.\n\nReturns the PID of the currently running process. Handled by INT 11.\n\n*Category: System Call Numbers*`],

  ["INT_GETPPID",
    `**INT_GETPPID** — \`12\`\n\n**Getppid** system call number.\n\nReturns the PID of the parent of the currently running process. Handled by INT 11.\n\n*Category: System Call Numbers*`],

  ["INT_WAIT",
    `**INT_WAIT** — \`13\`\n\n**Wait** system call number.\n\nBlocks the current process until a signal is received from the specified process. Handled by INT 11.\n\n*Category: System Call Numbers*`],

  ["INT_SIGNAL",
    `**INT_SIGNAL** — \`14\`\n\n**Signal** system call number.\n\nSends a signal to all processes waiting on the current process. Handled by INT 11.\n\n*Category: System Call Numbers*`],

  ["INT_SEMGET",
    `**INT_SEMGET** — \`17\`\n\n**Semget** system call number.\n\nAcquires a new semaphore and returns a semaphore descriptor. Handled by INT 13.\n\n*Category: System Call Numbers*`],

  ["INT_SEMRELEASE",
    `**INT_SEMRELEASE** — \`18\`\n\n**Semrelease** system call number.\n\nReleases a semaphore previously acquired by the process. Handled by INT 13.\n\n*Category: System Call Numbers*`],

  ["INT_SEMLOCK",
    `**INT_SEMLOCK** — \`19\`\n\n**SemLock** system call number.\n\nLocks a semaphore; blocks if already locked by another process. Handled by INT 14.\n\n*Category: System Call Numbers*`],

  ["INT_SEMUNLOCK",
    `**INT_SEMUNLOCK** — \`20\`\n\n**SemUnLock** system call number.\n\nUnlocks a semaphore and wakes up any waiting processes. Handled by INT 14.\n\n*Category: System Call Numbers*`],

  ["INT_SHUTDOWN",
    `**INT_SHUTDOWN** — \`21\`\n\n**Shutdown** system call number.\n\nCommits dirty disk buffers and halts the machine. Handled by INT 15.\n\n*Category: System Call Numbers*`],

  ["INT_NEWUSR",
    `**INT_NEWUSR** — \`22\`\n\n**Newusr** system call number.\n\nCreates a new user account. Only the root user can invoke this. Handled by INT 16.\n\n*Category: System Call Numbers*`],

  ["INT_REMUSR",
    `**INT_REMUSR** — \`23\`\n\n**Remusr** system call number.\n\nRemoves an existing user account. Only the root user can invoke this. Handled by INT 16.\n\n*Category: System Call Numbers*`],

  ["INT_SETPWD",
    `**INT_SETPWD** — \`24\`\n\n**Setpwd** system call number.\n\nSets or changes the password of a user. Handled by INT 16.\n\n*Category: System Call Numbers*`],

  ["INT_GETUNAME",
    `**INT_GETUNAME** — \`25\`\n\n**Getuname** system call number.\n\nReturns the username corresponding to a given user ID. Handled by INT 16.\n\n*Category: System Call Numbers*`],

  ["INT_GETUID",
    `**INT_GETUID** — \`26\`\n\n**Getuid** system call number.\n\nReturns the user ID corresponding to a given username. Handled by INT 16.\n\n*Category: System Call Numbers*`],

  ["INT_LOGIN",
    `**INT_LOGIN** — \`27\`\n\n**Login** system call number.\n\nAuthenticates a user and initiates a login session. Handled by INT 17.\n\n*Category: System Call Numbers*`],

  ["INT_LOGOUT",
    `**INT_LOGOUT** — \`28\`\n\n**Logout** system call number.\n\nTerminates the current user session and returns to the login screen. Handled by INT 12.\n\n*Category: System Call Numbers*`],

  ["INT_TEST0",
    `**INT_TEST0** — \`96\`\n\nTest system call 0. Reserved for debugging and testing. Handled by INT 18.\n\n*Category: System Call Numbers*`],

  ["INT_TEST1",
    `**INT_TEST1** — \`97\`\n\nTest system call 1. Reserved for debugging and testing. Handled by INT 18.\n\n*Category: System Call Numbers*`],

  ["INT_TEST2",
    `**INT_TEST2** — \`98\`\n\nTest system call 2. Reserved for debugging and testing. Handled by INT 18.\n\n*Category: System Call Numbers*`],

  ["INT_TEST3",
    `**INT_TEST3** — \`99\`\n\nTest system call 3. Reserved for debugging and testing. Handled by INT 18.\n\n*Category: System Call Numbers*`],

  // ─── Module Function Numbers ─────────────────────────────────────────

  // Resource Manager (Module 0) Functions
  ["ACQUIRE_BUFFER",
    `**ACQUIRE_BUFFER** — \`1\`\n\n**Resource Manager** function #1.\n\nAcquires a buffer page for disk block buffering. Blocks if the buffer is currently in use.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["RELEASE_BUFFER",
    `**RELEASE_BUFFER** — \`2\`\n\n**Resource Manager** function #2.\n\nReleases a previously acquired buffer page.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["ACQUIRE_DISK",
    `**ACQUIRE_DISK** — \`3\`\n\n**Resource Manager** function #3.\n\nAcquires exclusive access to the disk device. Blocks if the disk is currently in use.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["ACQUIRE_INODE",
    `**ACQUIRE_INODE** — \`4\`\n\n**Resource Manager** function #4.\n\nAcquires a lock on an inode entry to ensure mutual exclusion during file operations.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["RELEASE_INODE",
    `**RELEASE_INODE** — \`5\`\n\n**Resource Manager** function #5.\n\nReleases the lock on a previously acquired inode entry.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["ACQUIRE_SEMAPHORE",
    `**ACQUIRE_SEMAPHORE** — \`6\`\n\n**Resource Manager** function #6.\n\nAllocates a new semaphore from the Semaphore Table for the calling process.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["RELEASE_SEMAPHORE",
    `**RELEASE_SEMAPHORE** — \`7\`\n\n**Resource Manager** function #7.\n\nReleases a semaphore back to the Semaphore Table.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["ACQUIRE_TERMINAL",
    `**ACQUIRE_TERMINAL** — \`8\`\n\n**Resource Manager** function #8.\n\nAcquires exclusive access to the terminal device. Blocks if the terminal is currently in use.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  ["RELEASE_TERMINAL",
    `**RELEASE_TERMINAL** — \`9\`\n\n**Resource Manager** function #9.\n\nReleases the terminal device so other processes can use it.\n\n*Category: Module Function Numbers — Resource Manager (MOD_0)*`],

  // Process Manager (Module 1) Functions
  ["GET_PCB_ENTRY",
    `**GET_PCB_ENTRY** — \`1\`\n\n**Process Manager** function #1.\n\nFinds and returns a free Process Control Block entry from the Process Table.\n\n*Category: Module Function Numbers — Process Manager (MOD_1)*`],

  ["FREE_USER_AREA_PAGE",
    `**FREE_USER_AREA_PAGE** — \`2\`\n\n**Process Manager** function #2.\n\nFrees the user area page associated with a terminated process.\n\n*Category: Module Function Numbers — Process Manager (MOD_1)*`],

  ["EXIT_PROCESS",
    `**EXIT_PROCESS** — \`3\`\n\n**Process Manager** function #3.\n\nTerminates a process — frees its resources, sets state to TERMINATED, and wakes waiting processes.\n\n*Category: Module Function Numbers — Process Manager (MOD_1)*`],

  ["FREE_PAGE_TABLE",
    `**FREE_PAGE_TABLE** — \`4\`\n\n**Process Manager** function #4.\n\nFrees all pages allocated to a process by releasing its page table entries.\n\n*Category: Module Function Numbers — Process Manager (MOD_1)*`],

  ["KILL_ALL",
    `**KILL_ALL** — \`5\`\n\n**Process Manager** function #5.\n\nTerminates all processes except the idle, init/login, and the current process.\n\n*Category: Module Function Numbers — Process Manager (MOD_1)*`],

  // Memory Manager (Module 2) Functions
  ["GET_FREE_PAGE",
    `**GET_FREE_PAGE** — \`1\`\n\n**Memory Manager** function #1.\n\nAllocates and returns a free memory page from the Memory Free List.\n\n*Category: Module Function Numbers — Memory Manager (MOD_2)*`],

  ["RELEASE_PAGE",
    `**RELEASE_PAGE** — \`2\`\n\n**Memory Manager** function #2.\n\nReleases a memory page back to the Memory Free List.\n\n*Category: Module Function Numbers — Memory Manager (MOD_2)*`],

  ["GET_FREE_BLOCK",
    `**GET_FREE_BLOCK** — \`3\`\n\n**Memory Manager** function #3.\n\nAllocates and returns a free disk block from the Disk Free List.\n\n*Category: Module Function Numbers — Memory Manager (MOD_2)*`],

  ["RELEASE_BLOCK",
    `**RELEASE_BLOCK** — \`4\`\n\n**Memory Manager** function #4.\n\nReleases a disk block back to the Disk Free List.\n\n*Category: Module Function Numbers — Memory Manager (MOD_2)*`],

  ["GET_CODE_PAGE",
    `**GET_CODE_PAGE** — \`5\`\n\n**Memory Manager** function #5.\n\nLoads a code page of a process from disk into memory. Uses demand paging — returns an existing page if already loaded.\n\n*Category: Module Function Numbers — Memory Manager (MOD_2)*`],

  ["GET_SWAP_BLOCK",
    `**GET_SWAP_BLOCK** — \`6\`\n\n**Memory Manager** function #6.\n\nAllocates a disk block from the swap area for swapping out a memory page.\n\n*Category: Module Function Numbers — Memory Manager (MOD_2)*`],

  // File Manager (Module 3) Functions
  ["BUFFERED_WRITE",
    `**BUFFERED_WRITE** — \`1\`\n\n**File Manager** function #1.\n\nWrites a word to a file through the buffer cache.\n\n*Category: Module Function Numbers — File Manager (MOD_3)*`],

  ["BUFFERED_READ",
    `**BUFFERED_READ** — \`2\`\n\n**File Manager** function #2.\n\nReads a word from a file through the buffer cache.\n\n*Category: Module Function Numbers — File Manager (MOD_3)*`],

  ["OPEN",
    `**OPEN** — \`3\`\n\n**File Manager** function #3.\n\nOpens a file — creates an Open File Table entry and updates the File Status Table.\n\n*Category: Module Function Numbers — File Manager (MOD_3)*`],

  ["CLOSE",
    `**CLOSE** — \`4\`\n\n**File Manager** function #4.\n\nCloses a file — removes the Open File Table entry and updates the File Status Table.\n\n*Category: Module Function Numbers — File Manager (MOD_3)*`],

  // Device Manager (Module 4) Functions
  ["DISK_STORE",
    `**DISK_STORE** — \`1\`\n\n**Device Manager** function #1.\n\nStores (writes) a memory page to a disk block.\n\n*Category: Module Function Numbers — Device Manager (MOD_4)*`],

  ["DISK_LOAD",
    `**DISK_LOAD** — \`2\`\n\n**Device Manager** function #2.\n\nLoads (reads) a disk block into a memory page.\n\n*Category: Module Function Numbers — Device Manager (MOD_4)*`],

  ["TERMINAL_WRITE",
    `**TERMINAL_WRITE** — \`3\`\n\n**Device Manager** function #3.\n\nWrites a word to the terminal (console output).\n\n*Category: Module Function Numbers — Device Manager (MOD_4)*`],

  ["TERMINAL_READ",
    `**TERMINAL_READ** — \`4\`\n\n**Device Manager** function #4.\n\nReads a word from the terminal (console input).\n\n*Category: Module Function Numbers — Device Manager (MOD_4)*`],

  // Pager Module (Module 6) Functions
  ["SWAP_OUT",
    `**SWAP_OUT** — \`1\`\n\n**Pager Module** function #1.\n\nSwaps out the pages of a process from memory to disk swap area.\n\n*Category: Module Function Numbers — Pager Module (MOD_6)*`],

  ["SWAP_IN",
    `**SWAP_IN** — \`2\`\n\n**Pager Module** function #2.\n\nSwaps in the pages of a process from disk swap area back into memory.\n\n*Category: Module Function Numbers — Pager Module (MOD_6)*`],

  // ─── Kernel Data Structure Addresses ─────────────────────────────────

  ["PROCESS_TABLE",
    `**PROCESS_TABLE** — \`28672\`\n\nStarting address of the **Process Table** in memory.\n\nContains one entry per process with fields like PID, state, page table pointer, etc.\n\n*Category: Kernel Data Structure Addresses*`],

  ["OPEN_FILE_TABLE",
    `**OPEN_FILE_TABLE** — \`28928\`\n\nStarting address of the **Open File Table** in memory.\n\nTracks all currently open files across all processes.\n\n*Category: Kernel Data Structure Addresses*`],

  ["SEMAPHORE_TABLE",
    `**SEMAPHORE_TABLE** — \`29056\`\n\nStarting address of the **Semaphore Table** in memory.\n\nMaintains the state of all system semaphores.\n\n*Category: Kernel Data Structure Addresses*`],

  ["MEMORY_FREE_LIST",
    `**MEMORY_FREE_LIST** — \`29184\`\n\nStarting address of the **Memory Free List** in memory.\n\nTracks the allocation status of each physical memory page.\n\n*Category: Kernel Data Structure Addresses*`],

  ["FILE_STATUS_TABLE",
    `**FILE_STATUS_TABLE** — \`29312\`\n\nStarting address of the **File Status Table** in memory.\n\nTracks the number of open instances and locking status for each file.\n\n*Category: Kernel Data Structure Addresses*`],

  ["DISK_STATUS_TABLE",
    `**DISK_STATUS_TABLE** — \`29552\`\n\nStarting address of the **Disk Status Table** in memory.\n\nStores the current status of the disk device (busy/free, type of operation, etc.).\n\n*Category: Kernel Data Structure Addresses*`],

  ["SYSTEM_STATUS_TABLE",
    `**SYSTEM_STATUS_TABLE** — \`29560\`\n\nStarting address of the **System Status Table** in memory.\n\nHolds global system information such as the currently logged-in user and process count.\n\n*Category: Kernel Data Structure Addresses*`],

  ["TERMINAL_STATUS_TABLE",
    `**TERMINAL_STATUS_TABLE** — \`29568\`\n\nStarting address of the **Terminal Status Table** in memory.\n\nTracks which process currently owns the terminal.\n\n*Category: Kernel Data Structure Addresses*`],

  ["PAGE_TABLE_BASE",
    `**PAGE_TABLE_BASE** — \`29696\`\n\nStarting address of the **Page Tables** in memory.\n\nBase address from which all per-process page tables are laid out.\n\n*Category: Kernel Data Structure Addresses*`],

  ["BUFFER_TABLE",
    `**BUFFER_TABLE** — \`30016\`\n\nStarting address of the **Buffer Table** in memory.\n\nTracks which disk block is currently loaded in each buffer page and its dirty status.\n\n*Category: Kernel Data Structure Addresses*`],

  ["DISK_MAP_TABLE",
    `**DISK_MAP_TABLE** — \`30032\`\n\nStarting address of the **Disk Map Table** in memory.\n\nMaps each process's virtual pages to the corresponding disk blocks.\n\n*Category: Kernel Data Structure Addresses*`],

  ["INODE_TABLE",
    `**INODE_TABLE** — \`30208\`\n\nStarting address of the **Inode Table** in memory.\n\nStores metadata for all files: name, size, type, permissions, and disk block pointers.\n\n*Category: Kernel Data Structure Addresses*`],

  ["USER_TABLE",
    `**USER_TABLE** — \`31168\`\n\nStarting address of the **User Table** in memory.\n\nContains user account information (username and encrypted password).\n\n*Category: Kernel Data Structure Addresses*`],

  ["DISK_FREE_LIST",
    `**DISK_FREE_LIST** — \`31232\`\n\nStarting address of the **Disk Free List** in memory.\n\nTracks the allocation status of each disk block.\n\n*Category: Kernel Data Structure Addresses*`],

  ["ROOT_FILE",
    `**ROOT_FILE** — \`31744\`\n\nStarting address of the **Root File** in memory.\n\nContains the root directory listing of the eXpFS filesystem.\n\n*Category: Kernel Data Structure Addresses*`],

  ["BUFFER",
    `**BUFFER** — \`36352\`\n\nStarting address of the **Buffer Cache** in memory.\n\nUsed to cache disk blocks in memory for faster file I/O.\n\n*Category: Kernel Data Structure Addresses*`],

  ["BUFFER_BASE",
    `**BUFFER_BASE** — \`71\`\n\nStarting **page number** of the Buffer Cache.\n\nThe buffer cache begins at page 71 in physical memory.\n\n*Category: Kernel Data Structure Addresses*`],

  // ─── User Programs in Memory ─────────────────────────────────────────

  ["LIBRARY",
    `**LIBRARY** — \`32256\`\n\nStarting address of the **eXpOS Library** in memory.\n\nContains library functions available to user programs.\n\n*Category: User Programs in Memory*`],

  ["INIT",
    `**INIT** — \`33280\`\n\nStarting address of the **INIT / Login Program** in memory.\n\nThe first user program loaded by the OS during boot.\n\n*Category: User Programs in Memory*\n\nAlias: \`LOGIN\``],

  ["LOGIN",
    `**LOGIN** — \`33280\`\n\nStarting address of the **Login Program** in memory.\n\nAuthentication program loaded during boot.\n\n*Category: User Programs in Memory*\n\nAlias: \`INIT\``],

  ["SHELL",
    `**SHELL** — \`34304\`\n\nStarting address of the **Shell Program** in memory.\n\nThe command-line interface spawned after successful login.\n\n*Category: User Programs in Memory*`],

  ["IDLE",
    `**IDLE** — \`35328\`\n\nStarting address of the **Idle / Swapper Program** in memory.\n\nRuns when no other process is ready. Also serves as the swapper daemon.\n\n*Category: User Programs in Memory*\n\nAlias: \`SWAPPER\``],

  ["SWAPPER",
    `**SWAPPER** — \`35328\`\n\nStarting address of the **Swapper Program** in memory.\n\nThe idle process doubles as the swapper daemon for memory management.\n\n*Category: User Programs in Memory*\n\nAlias: \`IDLE\``],

  ["IDLE_PROCESS",
    `**IDLE_PROCESS** — \`0\`\n\nPID of the **Idle Process**.\n\nAlways running at PID 0 when no other process is scheduled.\n\n*Category: User Programs — Process IDs*`],

  ["INIT_PROCESS",
    `**INIT_PROCESS** — \`1\`\n\nPID of the **Init / Login Process**.\n\n*Category: User Programs — Process IDs*\n\nAlias: \`LOGIN_PROCESS\``],

  ["LOGIN_PROCESS",
    `**LOGIN_PROCESS** — \`1\`\n\nPID of the **Login Process**.\n\n*Category: User Programs — Process IDs*\n\nAlias: \`INIT_PROCESS\``],

  ["SHELL_PROCESS",
    `**SHELL_PROCESS** — \`2\`\n\nPID of the **Shell Process**.\n\n*Category: User Programs — Process IDs*`],

  ["SWAPPER_DAEMON",
    `**SWAPPER_DAEMON** — \`15\`\n\nPID of the **Swapper Daemon**.\n\nResponsible for swapping processes in and out of memory.\n\n*Category: User Programs — Process IDs*`],

  // ─── Process States ──────────────────────────────────────────────────

  ["READY",
    `**READY** — \`1\`\n\nProcess state: **READY**.\n\nThe process is ready to be scheduled for execution.\n\n*Category: Process States*`],

  ["RUNNING",
    `**RUNNING** — \`2\`\n\nProcess state: **RUNNING**.\n\nThe process is currently being executed by the CPU.\n\n*Category: Process States*`],

  ["CREATED",
    `**CREATED** — \`3\`\n\nProcess state: **CREATED**.\n\nThe process has been fully created and is awaiting its first schedule.\n\n*Category: Process States*`],

  ["TERMINATED",
    `**TERMINATED** — \`4\`\n\nProcess state: **TERMINATED**.\n\nThe process has finished execution and its resources are being freed.\n\n*Category: Process States*`],

  ["WAIT_DISK",
    `**WAIT_DISK** — \`5\`\n\nProcess state: **WAIT_DISK**.\n\nThe process is blocked, waiting to acquire the disk device.\n\n*Category: Process States*`],

  ["WAIT_FILE",
    `**WAIT_FILE** — \`6\`\n\nProcess state: **WAIT_FILE**.\n\nThe process is blocked, waiting for the release of an inode lock.\n\n*Category: Process States*`],

  ["WAIT_BUFFER",
    `**WAIT_BUFFER** — \`7\`\n\nProcess state: **WAIT_BUFFER**.\n\nThe process is blocked, waiting for a buffer cache page to be released.\n\n*Category: Process States*`],

  ["WAIT_TERMINAL",
    `**WAIT_TERMINAL** — \`8\`\n\nProcess state: **WAIT_TERMINAL**.\n\nThe process is blocked, waiting to acquire the terminal device.\n\n*Category: Process States*`],

  ["WAIT_PROCESS",
    `**WAIT_PROCESS** — \`9\`\n\nProcess state: **WAIT_PROCESS**.\n\nThe process is blocked, waiting for a signal from another process (via Wait system call).\n\n*Category: Process States*`],

  ["WAIT_SEMAPHORE",
    `**WAIT_SEMAPHORE** — \`10\`\n\nProcess state: **WAIT_SEMAPHORE**.\n\nThe process is blocked, waiting to acquire a locked semaphore.\n\n*Category: Process States*`],

  ["WAIT_MEM",
    `**WAIT_MEM** — \`11\`\n\nProcess state: **WAIT_MEM**.\n\nThe process is blocked because no free memory pages are available.\n\n*Category: Process States*`],

  ["ALLOCATED",
    `**ALLOCATED** — \`12\`\n\nProcess state: **ALLOCATED**.\n\nA Process Table entry has been allocated, but process creation is not yet complete.\n\n*Category: Process States*`],

  // ─── File Type / Permission Constants ────────────────────────────────

  ["EXCLUSIVE",
    `**EXCLUSIVE** — \`0\`\n\n**Exclusive** file permission.\n\nOnly the owner of the file can perform read/write operations.\n\n*Category: File Type & Permission (Inode Table)*`],

  ["OPEN_ACCESS",
    `**OPEN_ACCESS** — \`1\`\n\n**Open Access** file permission.\n\nAny user can perform read/write operations on the file.\n\n*Category: File Type & Permission (Inode Table)*`],

  ["ROOT",
    `**ROOT** — \`1\`\n\nFile type indicator: the file is the **Root File** (directory listing).\n\n*Category: File Type & Permission (Inode Table)*`],

  ["DATA",
    `**DATA** — \`2\`\n\nFile type indicator: the file is a **Data File**.\n\n*Category: File Type & Permission (Inode Table)*`],

  ["EXEC",
    `**EXEC** — \`3\`\n\nFile type indicator: the file is an **Executable File**.\n\n*Category: File Type & Permission (Inode Table)*`],

  // ─── Per-Process Resource Table ──────────────────────────────────────

  ["FILE",
    `**FILE** — \`0\`\n\nResource type: **File**.\n\nIndicates that the entry in the per-process resource table is a file descriptor.\n\n*Category: Per-Process Resource Table*`],

  ["SEMAPHORE",
    `**SEMAPHORE** — \`1\`\n\nResource type: **Semaphore**.\n\nIndicates that the entry in the per-process resource table is a semaphore descriptor.\n\n*Category: Per-Process Resource Table*`],

  ["RESOURCE_TABLE_OFFSET",
    `**RESOURCE_TABLE_OFFSET** — \`496\`\n\nOffset of the **Per-Process Resource Table** from the start of the user area page.\n\nThe resource table is located at (User Area Page × 512) + 496.\n\n*Category: Per-Process Resource Table*`],

  // ─── Swapping Constants ──────────────────────────────────────────────

  ["MEM_LOW",
    `**MEM_LOW** — \`4\`\n\nMemory is **critically low** — swap out must be initiated.\n\nWhen the number of free pages drops to this threshold, the pager module begins swapping out processes.\n\n*Category: Swapping Constants*`],

  ["MEM_HIGH",
    `**MEM_HIGH** — \`12\`\n\nMemory is **high enough** — a swapped-out process can be swapped back in.\n\nWhen free pages reach this threshold, the pager module swaps processes back in.\n\n*Category: Swapping Constants*`],

  ["MAX_TICK",
    `**MAX_TICK** — \`1000\`\n\n**Maximum tick count** before a swapped-out process must be brought back.\n\nEnsures no process stays swapped out indefinitely.\n\n*Category: Swapping Constants*`],

  // ─── eXpFS Disk Constants ────────────────────────────────────────────

  ["XFS_BSIZE",
    `**XFS_BSIZE** — \`512\`\n\nNumber of **words in a disk block** (eXpFS block size).\n\n*Category: eXpFS Disk Constants*`],

  ["MAX_FILE_BLOCKS",
    `**MAX_FILE_BLOCKS** — \`4\`\n\nMaximum number of **disk blocks allocatable** to each file.\n\n*Category: eXpFS Disk Constants*`],

  ["DISK_SWAP_AREA",
    `**DISK_SWAP_AREA** — \`256\`\n\nStarting **block number** of the Swap Area on disk.\n\nUsed by the pager module for swapping process pages.\n\n*Category: eXpFS Disk Constants*`],

  ["DISK_FREE_AREA",
    `**DISK_FREE_AREA** — \`69\`\n\nStarting **block number** of the User Block area on disk.\n\nUser files and executables are stored starting from this block.\n\n*Category: eXpFS Disk Constants*`],

  ["DISK_SIZE",
    `**DISK_SIZE** — \`512\`\n\nTotal number of **blocks on the disk**.\n\n*Category: eXpFS Disk Constants*\n\n> **NEXSM**: On the two-core NEXSM machine, this value is \`528\`.`],

  // ─── Maximum Limits ──────────────────────────────────────────────────

  ["PAGE_SIZE",
    `**PAGE_SIZE** — \`512\`\n\nSize of a **memory page** in eXpOS (in words).\n\n*Category: Maximum Limits*`],

  ["NUM_MEM_PAGES",
    `**NUM_MEM_PAGES** — \`128\`\n\nTotal number of **physical memory pages** in eXpOS.\n\n*Category: Maximum Limits*\n\n> **NEXSM**: On the two-core NEXSM machine, this value is \`144\`.`],

  ["MAX_PROC_NUM",
    `**MAX_PROC_NUM** — \`16\`\n\nMaximum number of **processes** allowed by eXpOS.\n\n*Category: Maximum Limits*`],

  ["PT_ENTRY_SIZE",
    `**PT_ENTRY_SIZE** — \`16\`\n\nSize (in words) of one **page table entry**.\n\nEach process has PT_ENTRY_SIZE words reserved in the page table area.\n\n*Category: Maximum Limits*`],

  ["MAX_OPENFILE_NUM",
    `**MAX_OPENFILE_NUM** — \`32\`\n\nMaximum number of **open files** allowed across all processes.\n\n*Category: Maximum Limits*`],

  ["MAX_MEM_PAGE",
    `**MAX_MEM_PAGE** — \`128\`\n\nMaximum number of **memory pages** available to eXpOS.\n\n*Category: Maximum Limits*`],

  ["MAX_SEM_COUNT",
    `**MAX_SEM_COUNT** — \`32\`\n\nMaximum number of **semaphores** allowed by eXpOS.\n\n*Category: Maximum Limits*`],

  ["MAX_PROC_PAGES",
    `**MAX_PROC_PAGES** — \`10\`\n\nMaximum number of **pages** allocated to each process.\n\nIncludes code, stack, heap, and user area pages.\n\n*Category: Maximum Limits*`],

  ["MAX_BUFFER",
    `**MAX_BUFFER** — \`4\`\n\nMaximum number of **buffer cache pages** in eXpOS.\n\n*Category: Maximum Limits*`],

  ["MAX_FILE_NUM",
    `**MAX_FILE_NUM** — \`60\`\n\nMaximum number of **files** that can exist in the filesystem.\n\n*Category: Maximum Limits*`],

  ["MAX_FILE_SIZE",
    `**MAX_FILE_SIZE** — \`2048\`\n\nMaximum number of **words** in a single file.\n\n*Category: Maximum Limits*`],

  ["MAX_USER_NUM",
    `**MAX_USER_NUM** — \`16\`\n\nMaximum number of **user accounts** allowed in eXpOS.\n\n*Category: Maximum Limits*`],

  // ─── Miscellaneous Constants ─────────────────────────────────────────

  ["INODE_ROOT",
    `**INODE_ROOT** — \`0\`\n\nThe Inode Index field of the Open File Table is set to \`INODE_ROOT\` when the file is the **Root File**.\n\n*Category: Miscellaneous*`],

  ["KERNEL",
    `**KERNEL** — \`0\`\n\nIndicates the **Kernel user** in the \`CURRENT_USER_ID\` field of the System Status Table.\n\nUsed when the OS is executing in kernel mode without a logged-in user.\n\n*Category: Miscellaneous*`],

  ["ZERO",
    `**ZERO** — \`0\`\n\nSPL predefined constant for the value **zero**.\n\n*Category: Miscellaneous*`],

  ["ONE",
    `**ONE** — \`1\`\n\nSPL predefined constant for the value **one**.\n\n*Category: Miscellaneous*`],
]);

export const SPL_KEYWORDS = new Set([
  "alias", "halt", "backup", "loadi", "endwhile", "else", "define", "goto", 
  "restore", "load", "break", "endif", "encrypt", "call", "readi", "store", 
  "continue", "breakpoint", "return", "read", "do", "if", "inline", "ireturn", 
  "print", "while", "then", "multipush", "multipop"
]);

export const SPL_REGISTERS = new Set([
  "R0","R1","R2","R3","R4","R5","R6","R7","R8","R9","R10",
  "R11","R12","R13","R14","R15","R16","R17","R18","R19",
  "BP","SP","IP","PTBR","PTLR","EIP","EC","EPN","EMA","P0","P1","P2","P3"
]);
