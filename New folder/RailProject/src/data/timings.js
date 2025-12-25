// Mumbai Railway Timetable Data
// Lines: Central, Harbour, Trans Harbour

export const trainTimings = {
    // CENTRAL LINE - DOWN (CSMT to Kalyan/Karjat/Kasara)
    centralDown: [
        { trainNo: "C101", type: "S", csmt: "04:05", byculla: "04:13", dadar: "04:22", kurla: "04:34", ghatkopar: "04:40", thane: "04:58", dombivli: "05:15", kalyan: "05:25", dest: "KYN" },
        { trainNo: "C103", type: "F", csmt: "04:15", dadar: "04:28", ghatkopar: "04:42", thane: "04:55", kalyan: "05:12", dest: "KSRA" },
        { trainNo: "C105", type: "S", csmt: "04:25", byculla: "04:33", dadar: "04:42", kurla: "04:54", ghatkopar: "05:00", thane: "05:18", dombivli: "05:35", kalyan: "05:45", dest: "KYN" },
        { trainNo: "C107", type: "S", csmt: "04:35", byculla: "04:43", dadar: "04:52", kurla: "05:04", ghatkopar: "05:10", thane: "05:28", dombivli: "05:45", dest: "DI" },
        { trainNo: "C109", type: "F", csmt: "04:45", dadar: "04:58", ghatkopar: "05:12", thane: "05:25", kalyan: "05:42", dest: "KJT" },
        { trainNo: "C111", type: "S", csmt: "05:00", byculla: "05:08", dadar: "05:17", kurla: "05:29", ghatkopar: "05:35", thane: "05:53", dombivli: "06:10", kalyan: "06:20", dest: "KYN" },
        { trainNo: "C113", type: "S", csmt: "05:15", byculla: "05:23", dadar: "05:32", kurla: "05:44", ghatkopar: "05:50", thane: "06:08", dest: "TNA" },
        { trainNo: "C115", type: "F", csmt: "05:30", dadar: "05:43", ghatkopar: "05:57", thane: "06:10", kalyan: "06:27", dest: "KSRA" },
        { trainNo: "C117", type: "S", csmt: "05:45", byculla: "05:53", dadar: "06:02", kurla: "06:14", ghatkopar: "06:20", thane: "06:38", dombivli: "06:55", kalyan: "07:05", dest: "KYN" },
        { trainNo: "C119", type: "SF", csmt: "06:00", byculla: "06:07", dadar: "06:15", kurla: "06:25", ghatkopar: "06:31", thane: "06:47", dombivli: "07:03", dest: "DI" },
        { trainNo: "C121", type: "F", csmt: "06:15", dadar: "06:28", ghatkopar: "06:42", thane: "06:55", kalyan: "07:12", dest: "KJT" },
        { trainNo: "C123", type: "S", csmt: "06:30", byculla: "06:38", dadar: "06:47", kurla: "06:59", ghatkopar: "07:05", thane: "07:23", dombivli: "07:40", kalyan: "07:50", dest: "KYN" },
        { trainNo: "C125", type: "S", csmt: "06:45", byculla: "06:53", dadar: "07:02", kurla: "07:14", ghatkopar: "07:20", thane: "07:38", dest: "TNA" },
        { trainNo: "C127", type: "F", csmt: "07:00", dadar: "07:13", ghatkopar: "07:27", thane: "07:40", kalyan: "07:57", dest: "KSRA" },
        { trainNo: "C129", type: "S", csmt: "07:15", byculla: "07:23", dadar: "07:32", kurla: "07:44", ghatkopar: "07:50", thane: "08:08", dombivli: "08:25", kalyan: "08:35", dest: "KYN" },
        { trainNo: "C131", type: "SF", csmt: "07:30", byculla: "07:37", dadar: "07:45", kurla: "07:55", ghatkopar: "08:01", thane: "08:17", dombivli: "08:33", dest: "DI" },
        { trainNo: "C133", type: "F", csmt: "07:45", dadar: "07:58", ghatkopar: "08:12", thane: "08:25", kalyan: "08:42", dest: "KJT" },
        { trainNo: "C135", type: "S", csmt: "08:00", byculla: "08:08", dadar: "08:17", kurla: "08:29", ghatkopar: "08:35", thane: "08:53", dombivli: "09:10", kalyan: "09:20", dest: "KYN" },
        { trainNo: "C137", type: "S", csmt: "08:15", byculla: "08:23", dadar: "08:32", kurla: "08:44", ghatkopar: "08:50", thane: "09:08", dest: "TNA" },
        { trainNo: "C139", type: "F", csmt: "08:30", dadar: "08:43", ghatkopar: "08:57", thane: "09:10", kalyan: "09:27", dest: "KSRA" },
        { trainNo: "C141", type: "S", csmt: "08:45", byculla: "08:53", dadar: "09:02", kurla: "09:14", ghatkopar: "09:20", thane: "09:38", dombivli: "09:55", kalyan: "10:05", dest: "KYN" },
        { trainNo: "C143", type: "SF", csmt: "09:00", byculla: "09:07", dadar: "09:15", kurla: "09:25", ghatkopar: "09:31", thane: "09:47", dombivli: "10:03", dest: "DI" },
        { trainNo: "C145", type: "F", csmt: "09:15", dadar: "09:28", ghatkopar: "09:42", thane: "09:55", kalyan: "10:12", dest: "KJT" },
        { trainNo: "C147", type: "S", csmt: "09:30", byculla: "09:38", dadar: "09:47", kurla: "09:59", ghatkopar: "10:05", thane: "10:23", dombivli: "10:40", kalyan: "10:50", dest: "KYN" },
        { trainNo: "C149", type: "S", csmt: "10:00", byculla: "10:08", dadar: "10:17", kurla: "10:29", ghatkopar: "10:35", thane: "10:53", dest: "TNA" },
        { trainNo: "C151", type: "F", csmt: "10:30", dadar: "10:43", ghatkopar: "10:57", thane: "11:10", kalyan: "11:27", dest: "KSRA" },
        { trainNo: "C153", type: "S", csmt: "11:00", byculla: "11:08", dadar: "11:17", kurla: "11:29", ghatkopar: "11:35", thane: "11:53", dombivli: "12:10", kalyan: "12:20", dest: "KYN" },
        { trainNo: "C155", type: "F", csmt: "11:30", dadar: "11:43", ghatkopar: "11:57", thane: "12:10", kalyan: "12:27", dest: "KJT" },
        { trainNo: "C157", type: "S", csmt: "12:00", byculla: "12:08", dadar: "12:17", kurla: "12:29", ghatkopar: "12:35", thane: "12:53", dombivli: "13:10", kalyan: "13:20", dest: "KYN" },
        { trainNo: "C159", type: "F", csmt: "12:30", dadar: "12:43", ghatkopar: "12:57", thane: "13:10", kalyan: "13:27", dest: "KSRA" },
        { trainNo: "C161", type: "S", csmt: "13:00", byculla: "13:08", dadar: "13:17", kurla: "13:29", ghatkopar: "13:35", thane: "13:53", dombivli: "14:10", kalyan: "14:20", dest: "KYN" },
        { trainNo: "C163", type: "F", csmt: "13:30", dadar: "13:43", ghatkopar: "13:57", thane: "14:10", kalyan: "14:27", dest: "KJT" },
        { trainNo: "C165", type: "S", csmt: "14:00", byculla: "14:08", dadar: "14:17", kurla: "14:29", ghatkopar: "14:35", thane: "14:53", dombivli: "15:10", kalyan: "15:20", dest: "KYN" },
        { trainNo: "C167", type: "F", csmt: "14:30", dadar: "14:43", ghatkopar: "14:57", thane: "15:10", kalyan: "15:27", dest: "KSRA" },
        { trainNo: "C169", type: "S", csmt: "15:00", byculla: "15:08", dadar: "15:17", kurla: "15:29", ghatkopar: "15:35", thane: "15:53", dombivli: "16:10", kalyan: "16:20", dest: "KYN" },
        { trainNo: "C171", type: "SF", csmt: "15:30", byculla: "15:37", dadar: "15:45", kurla: "15:55", ghatkopar: "16:01", thane: "16:17", dombivli: "16:33", dest: "DI" },
        { trainNo: "C173", type: "F", csmt: "16:00", dadar: "16:13", ghatkopar: "16:27", thane: "16:40", kalyan: "16:57", dest: "KJT" },
        { trainNo: "C175", type: "S", csmt: "16:30", byculla: "16:38", dadar: "16:47", kurla: "16:59", ghatkopar: "17:05", thane: "17:23", dombivli: "17:40", kalyan: "17:50", dest: "KYN" },
        { trainNo: "C177", type: "F", csmt: "17:00", dadar: "17:13", ghatkopar: "17:27", thane: "17:40", kalyan: "17:57", dest: "KSRA" },
        { trainNo: "C179", type: "S", csmt: "17:30", byculla: "17:38", dadar: "17:47", kurla: "17:59", ghatkopar: "18:05", thane: "18:23", dombivli: "18:40", kalyan: "18:50", dest: "KYN" },
        { trainNo: "C181", type: "SF", csmt: "18:00", byculla: "18:07", dadar: "18:15", kurla: "18:25", ghatkopar: "18:31", thane: "18:47", dombivli: "19:03", dest: "DI" },
        { trainNo: "C183", type: "F", csmt: "18:30", dadar: "18:43", ghatkopar: "18:57", thane: "19:10", kalyan: "19:27", dest: "KJT" },
        { trainNo: "C185", type: "S", csmt: "19:00", byculla: "19:08", dadar: "19:17", kurla: "19:29", ghatkopar: "19:35", thane: "19:53", dombivli: "20:10", kalyan: "20:20", dest: "KYN" },
        { trainNo: "C187", type: "F", csmt: "19:30", dadar: "19:43", ghatkopar: "19:57", thane: "20:10", kalyan: "20:27", dest: "KSRA" },
        { trainNo: "C189", type: "S", csmt: "20:00", byculla: "20:08", dadar: "20:17", kurla: "20:29", ghatkopar: "20:35", thane: "20:53", dombivli: "21:10", kalyan: "21:20", dest: "KYN" },
        { trainNo: "C191", type: "F", csmt: "20:30", dadar: "20:43", ghatkopar: "20:57", thane: "21:10", kalyan: "21:27", dest: "KJT" },
        { trainNo: "C193", type: "S", csmt: "21:00", byculla: "21:08", dadar: "21:17", kurla: "21:29", ghatkopar: "21:35", thane: "21:53", dombivli: "22:10", kalyan: "22:20", dest: "KYN" },
        { trainNo: "C195", type: "F", csmt: "21:30", dadar: "21:43", ghatkopar: "21:57", thane: "22:10", kalyan: "22:27", dest: "KSRA" },
        { trainNo: "C197", type: "S", csmt: "22:00", byculla: "22:08", dadar: "22:17", kurla: "22:29", ghatkopar: "22:35", thane: "22:53", dombivli: "23:10", kalyan: "23:20", dest: "KYN" },
        { trainNo: "C199", type: "S", csmt: "22:30", byculla: "22:38", dadar: "22:47", kurla: "22:59", ghatkopar: "23:05", thane: "23:23", dest: "TNA" },
        { trainNo: "C201", type: "F", csmt: "23:00", dadar: "23:13", ghatkopar: "23:27", thane: "23:40", kalyan: "23:57", dest: "KJT" },
    ],

    // CENTRAL LINE - UP (Kalyan/Karjat/Kasara to CSMT)
    centralUp: [
        { trainNo: "C102", type: "S", kalyan: "04:00", dombivli: "04:10", thane: "04:27", ghatkopar: "04:45", kurla: "04:51", dadar: "05:03", byculla: "05:12", csmt: "05:20", from: "KYN" },
        { trainNo: "C104", type: "F", kalyan: "04:15", thane: "04:32", ghatkopar: "04:45", dadar: "04:59", csmt: "05:12", from: "KSRA" },
        { trainNo: "C106", type: "S", kalyan: "04:30", dombivli: "04:40", thane: "04:57", ghatkopar: "05:15", kurla: "05:21", dadar: "05:33", byculla: "05:42", csmt: "05:50", from: "KYN" },
        { trainNo: "C108", type: "S", dombivli: "04:45", thane: "05:02", ghatkopar: "05:20", kurla: "05:26", dadar: "05:38", byculla: "05:47", csmt: "05:55", from: "DI" },
        { trainNo: "C110", type: "F", kalyan: "05:00", thane: "05:17", ghatkopar: "05:30", dadar: "05:44", csmt: "05:57", from: "KJT" },
        { trainNo: "C112", type: "S", kalyan: "05:15", dombivli: "05:25", thane: "05:42", ghatkopar: "06:00", kurla: "06:06", dadar: "06:18", byculla: "06:27", csmt: "06:35", from: "KYN" },
        { trainNo: "C114", type: "S", thane: "05:30", ghatkopar: "05:48", kurla: "05:54", dadar: "06:06", byculla: "06:15", csmt: "06:23", from: "TNA" },
        { trainNo: "C116", type: "F", kalyan: "05:45", thane: "06:02", ghatkopar: "06:15", dadar: "06:29", csmt: "06:42", from: "KSRA" },
        { trainNo: "C118", type: "S", kalyan: "06:00", dombivli: "06:10", thane: "06:27", ghatkopar: "06:45", kurla: "06:51", dadar: "07:03", byculla: "07:12", csmt: "07:20", from: "KYN" },
        { trainNo: "C120", type: "SF", dombivli: "06:15", thane: "06:31", ghatkopar: "06:47", kurla: "06:53", dadar: "07:03", byculla: "07:10", csmt: "07:17", from: "DI" },
        { trainNo: "C122", type: "F", kalyan: "06:30", thane: "06:47", ghatkopar: "07:00", dadar: "07:14", csmt: "07:27", from: "KJT" },
        { trainNo: "C124", type: "S", kalyan: "06:45", dombivli: "06:55", thane: "07:12", ghatkopar: "07:30", kurla: "07:36", dadar: "07:48", byculla: "07:57", csmt: "08:05", from: "KYN" },
        { trainNo: "C126", type: "S", thane: "07:00", ghatkopar: "07:18", kurla: "07:24", dadar: "07:36", byculla: "07:45", csmt: "07:53", from: "TNA" },
        { trainNo: "C128", type: "F", kalyan: "07:15", thane: "07:32", ghatkopar: "07:45", dadar: "07:59", csmt: "08:12", from: "KSRA" },
        { trainNo: "C130", type: "S", kalyan: "07:30", dombivli: "07:40", thane: "07:57", ghatkopar: "08:15", kurla: "08:21", dadar: "08:33", byculla: "08:42", csmt: "08:50", from: "KYN" },
        { trainNo: "C132", type: "SF", dombivli: "07:45", thane: "08:01", ghatkopar: "08:17", kurla: "08:23", dadar: "08:33", byculla: "08:40", csmt: "08:47", from: "DI" },
        { trainNo: "C134", type: "F", kalyan: "08:00", thane: "08:17", ghatkopar: "08:30", dadar: "08:44", csmt: "08:57", from: "KJT" },
        { trainNo: "C136", type: "S", kalyan: "08:15", dombivli: "08:25", thane: "08:42", ghatkopar: "09:00", kurla: "09:06", dadar: "09:18", byculla: "09:27", csmt: "09:35", from: "KYN" },
        { trainNo: "C138", type: "S", thane: "08:30", ghatkopar: "08:48", kurla: "08:54", dadar: "09:06", byculla: "09:15", csmt: "09:23", from: "TNA" },
        { trainNo: "C140", type: "F", kalyan: "09:00", thane: "09:17", ghatkopar: "09:30", dadar: "09:44", csmt: "09:57", from: "KSRA" },
        { trainNo: "C142", type: "S", kalyan: "09:30", dombivli: "09:40", thane: "09:57", ghatkopar: "10:15", kurla: "10:21", dadar: "10:33", byculla: "10:42", csmt: "10:50", from: "KYN" },
        { trainNo: "C144", type: "F", kalyan: "10:00", thane: "10:17", ghatkopar: "10:30", dadar: "10:44", csmt: "10:57", from: "KJT" },
        { trainNo: "C146", type: "S", kalyan: "10:30", dombivli: "10:40", thane: "10:57", ghatkopar: "11:15", kurla: "11:21", dadar: "11:33", byculla: "11:42", csmt: "11:50", from: "KYN" },
        { trainNo: "C148", type: "F", kalyan: "11:00", thane: "11:17", ghatkopar: "11:30", dadar: "11:44", csmt: "11:57", from: "KSRA" },
        { trainNo: "C150", type: "S", kalyan: "11:30", dombivli: "11:40", thane: "11:57", ghatkopar: "12:15", kurla: "12:21", dadar: "12:33", byculla: "12:42", csmt: "12:50", from: "KYN" },
        { trainNo: "C152", type: "F", kalyan: "12:00", thane: "12:17", ghatkopar: "12:30", dadar: "12:44", csmt: "12:57", from: "KJT" },
        { trainNo: "C154", type: "S", kalyan: "12:30", dombivli: "12:40", thane: "12:57", ghatkopar: "13:15", kurla: "13:21", dadar: "13:33", byculla: "13:42", csmt: "13:50", from: "KYN" },
        { trainNo: "C156", type: "F", kalyan: "13:00", thane: "13:17", ghatkopar: "13:30", dadar: "13:44", csmt: "13:57", from: "KSRA" },
        { trainNo: "C158", type: "S", kalyan: "14:00", dombivli: "14:10", thane: "14:27", ghatkopar: "14:45", kurla: "14:51", dadar: "15:03", byculla: "15:12", csmt: "15:20", from: "KYN" },
        { trainNo: "C160", type: "F", kalyan: "15:00", thane: "15:17", ghatkopar: "15:30", dadar: "15:44", csmt: "15:57", from: "KJT" },
        { trainNo: "C162", type: "S", kalyan: "16:00", dombivli: "16:10", thane: "16:27", ghatkopar: "16:45", kurla: "16:51", dadar: "17:03", byculla: "17:12", csmt: "17:20", from: "KYN" },
        { trainNo: "C164", type: "F", kalyan: "17:00", thane: "17:17", ghatkopar: "17:30", dadar: "17:44", csmt: "17:57", from: "KSRA" },
        { trainNo: "C166", type: "S", kalyan: "18:00", dombivli: "18:10", thane: "18:27", ghatkopar: "18:45", kurla: "18:51", dadar: "19:03", byculla: "19:12", csmt: "19:20", from: "KYN" },
        { trainNo: "C168", type: "F", kalyan: "19:00", thane: "19:17", ghatkopar: "19:30", dadar: "19:44", csmt: "19:57", from: "KJT" },
        { trainNo: "C170", type: "S", kalyan: "20:00", dombivli: "20:10", thane: "20:27", ghatkopar: "20:45", kurla: "20:51", dadar: "21:03", byculla: "21:12", csmt: "21:20", from: "KYN" },
        { trainNo: "C172", type: "F", kalyan: "21:00", thane: "21:17", ghatkopar: "21:30", dadar: "21:44", csmt: "21:57", from: "KSRA" },
        { trainNo: "C174", type: "S", kalyan: "22:00", dombivli: "22:10", thane: "22:27", ghatkopar: "22:45", kurla: "22:51", dadar: "23:03", byculla: "23:12", csmt: "23:20", from: "KYN" },
    ],

    // HARBOUR LINE - DOWN (CSMT to Panvel) - With Cotton Green station
    harbourDown: [
        { trainNo: "H101", type: "S", csmt: "04:10", byculla: "04:18", dockyardRoad: "04:22", dadar: "04:27", vadala: "04:33", cottonGreen: "04:37", chembur: "04:45", vashi: "05:00", juinagar: "05:06", nerul: "05:12", panvel: "05:25", dest: "PNVL" },
        { trainNo: "H103", type: "F", csmt: "04:30", dockyardRoad: "04:38", dadar: "04:42", vadala: "04:48", cottonGreen: "04:52", chembur: "04:58", vashi: "05:12", juinagar: "05:18", panvel: "05:30", dest: "PNVL" },
        { trainNo: "H105", type: "S", csmt: "04:50", byculla: "04:58", dockyardRoad: "05:02", dadar: "05:07", vadala: "05:13", cottonGreen: "05:17", chembur: "05:25", vashi: "05:40", juinagar: "05:46", nerul: "05:52", panvel: "06:05", dest: "PNVL" },
        { trainNo: "H107", type: "S", csmt: "05:10", byculla: "05:18", dockyardRoad: "05:22", dadar: "05:27", vadala: "05:33", cottonGreen: "05:37", chembur: "05:45", vashi: "06:00", dest: "VSHI" },
        { trainNo: "H109", type: "F", csmt: "05:30", dockyardRoad: "05:38", dadar: "05:42", vadala: "05:48", cottonGreen: "05:52", chembur: "05:58", vashi: "06:12", juinagar: "06:18", panvel: "06:30", dest: "PNVL" },
        { trainNo: "H111", type: "S", csmt: "05:50", byculla: "05:58", dockyardRoad: "06:02", dadar: "06:07", vadala: "06:13", cottonGreen: "06:17", chembur: "06:25", vashi: "06:40", juinagar: "06:46", nerul: "06:52", panvel: "07:05", dest: "PNVL" },
        { trainNo: "H113", type: "S", csmt: "06:10", byculla: "06:18", dockyardRoad: "06:22", dadar: "06:27", vadala: "06:33", cottonGreen: "06:37", chembur: "06:45", vashi: "07:00", dest: "VSHI" },
        { trainNo: "H115", type: "F", csmt: "06:30", dockyardRoad: "06:38", dadar: "06:42", vadala: "06:48", cottonGreen: "06:52", chembur: "06:58", vashi: "07:12", juinagar: "07:18", panvel: "07:30", dest: "PNVL" },
        { trainNo: "H117", type: "S", csmt: "06:50", byculla: "06:58", dockyardRoad: "07:02", dadar: "07:07", vadala: "07:13", cottonGreen: "07:17", chembur: "07:25", vashi: "07:40", juinagar: "07:46", nerul: "07:52", panvel: "08:05", dest: "PNVL" },
        { trainNo: "H119", type: "SF", csmt: "07:10", byculla: "07:17", dockyardRoad: "07:21", dadar: "07:25", vadala: "07:31", cottonGreen: "07:35", chembur: "07:41", vashi: "07:55", juinagar: "08:00", nerul: "08:05", panvel: "08:18", dest: "PNVL" },
        { trainNo: "H121", type: "F", csmt: "07:30", dockyardRoad: "07:38", dadar: "07:42", vadala: "07:48", cottonGreen: "07:52", chembur: "07:58", vashi: "08:12", juinagar: "08:18", panvel: "08:30", dest: "PNVL" },
        { trainNo: "H123", type: "S", csmt: "07:50", byculla: "07:58", dockyardRoad: "08:02", dadar: "08:07", vadala: "08:13", cottonGreen: "08:17", chembur: "08:25", vashi: "08:40", juinagar: "08:46", nerul: "08:52", panvel: "09:05", dest: "PNVL" },
        { trainNo: "H125", type: "S", csmt: "08:20", byculla: "08:28", dockyardRoad: "08:32", dadar: "08:37", vadala: "08:43", cottonGreen: "08:47", chembur: "08:55", vashi: "09:10", dest: "VSHI" },
        { trainNo: "H127", type: "F", csmt: "08:50", dockyardRoad: "08:58", dadar: "09:02", vadala: "09:08", cottonGreen: "09:12", chembur: "09:18", vashi: "09:32", juinagar: "09:38", panvel: "09:50", dest: "PNVL" },
        { trainNo: "H129", type: "S", csmt: "09:20", byculla: "09:28", dockyardRoad: "09:32", dadar: "09:37", vadala: "09:43", cottonGreen: "09:47", chembur: "09:55", vashi: "10:10", juinagar: "10:16", nerul: "10:22", panvel: "10:35", dest: "PNVL" },
        { trainNo: "H131", type: "S", csmt: "10:00", byculla: "10:08", dockyardRoad: "10:12", dadar: "10:17", vadala: "10:23", cottonGreen: "10:27", chembur: "10:35", vashi: "10:50", juinagar: "10:56", nerul: "11:02", panvel: "11:15", dest: "PNVL" },
        { trainNo: "H133", type: "F", csmt: "10:40", dockyardRoad: "10:48", dadar: "10:52", vadala: "10:58", cottonGreen: "11:02", chembur: "11:08", vashi: "11:22", juinagar: "11:28", panvel: "11:40", dest: "PNVL" },
        { trainNo: "H135", type: "S", csmt: "11:20", byculla: "11:28", dockyardRoad: "11:32", dadar: "11:37", vadala: "11:43", cottonGreen: "11:47", chembur: "11:55", vashi: "12:10", juinagar: "12:16", nerul: "12:22", panvel: "12:35", dest: "PNVL" },
        { trainNo: "H137", type: "S", csmt: "12:00", byculla: "12:08", dockyardRoad: "12:12", dadar: "12:17", vadala: "12:23", cottonGreen: "12:27", chembur: "12:35", vashi: "12:50", dest: "VSHI" },
        { trainNo: "H139", type: "F", csmt: "12:40", dockyardRoad: "12:48", dadar: "12:52", vadala: "12:58", cottonGreen: "13:02", chembur: "13:08", vashi: "13:22", juinagar: "13:28", panvel: "13:40", dest: "PNVL" },
        { trainNo: "H141", type: "S", csmt: "13:20", byculla: "13:28", dockyardRoad: "13:32", dadar: "13:37", vadala: "13:43", cottonGreen: "13:47", chembur: "13:55", vashi: "14:10", juinagar: "14:16", nerul: "14:22", panvel: "14:35", dest: "PNVL" },
        { trainNo: "H143", type: "F", csmt: "14:00", dockyardRoad: "14:08", dadar: "14:12", vadala: "14:18", cottonGreen: "14:22", chembur: "14:28", vashi: "14:42", juinagar: "14:48", panvel: "15:00", dest: "PNVL" },
        { trainNo: "H145", type: "S", csmt: "15:00", byculla: "15:08", dockyardRoad: "15:12", dadar: "15:17", vadala: "15:23", cottonGreen: "15:27", chembur: "15:35", vashi: "15:50", juinagar: "15:56", nerul: "16:02", panvel: "16:15", dest: "PNVL" },
        { trainNo: "H147", type: "SF", csmt: "16:00", byculla: "16:07", dockyardRoad: "16:11", dadar: "16:15", vadala: "16:21", cottonGreen: "16:25", chembur: "16:31", vashi: "16:45", juinagar: "16:50", nerul: "16:55", panvel: "17:08", dest: "PNVL" },
        { trainNo: "H149", type: "F", csmt: "17:00", dockyardRoad: "17:08", dadar: "17:12", vadala: "17:18", cottonGreen: "17:22", chembur: "17:28", vashi: "17:42", juinagar: "17:48", panvel: "18:00", dest: "PNVL" },
        { trainNo: "H151", type: "S", csmt: "18:00", byculla: "18:08", dockyardRoad: "18:12", dadar: "18:17", vadala: "18:23", cottonGreen: "18:27", chembur: "18:35", vashi: "18:50", juinagar: "18:56", nerul: "19:02", panvel: "19:15", dest: "PNVL" },
        { trainNo: "H153", type: "F", csmt: "19:00", dockyardRoad: "19:08", dadar: "19:12", vadala: "19:18", cottonGreen: "19:22", chembur: "19:28", vashi: "19:42", juinagar: "19:48", panvel: "20:00", dest: "PNVL" },
        { trainNo: "H155", type: "S", csmt: "20:00", byculla: "20:08", dockyardRoad: "20:12", dadar: "20:17", vadala: "20:23", cottonGreen: "20:27", chembur: "20:35", vashi: "20:50", juinagar: "20:56", nerul: "21:02", panvel: "21:15", dest: "PNVL" },
        { trainNo: "H157", type: "S", csmt: "21:00", byculla: "21:08", dockyardRoad: "21:12", dadar: "21:17", vadala: "21:23", cottonGreen: "21:27", chembur: "21:35", vashi: "21:50", dest: "VSHI" },
        { trainNo: "H159", type: "F", csmt: "22:00", dockyardRoad: "22:08", dadar: "22:12", vadala: "22:18", cottonGreen: "22:22", chembur: "22:28", vashi: "22:42", juinagar: "22:48", panvel: "23:00", dest: "PNVL" },
    ],

    // HARBOUR LINE - UP (Panvel to CSMT) - With Cotton Green station
    harbourUp: [
        { trainNo: "H102", type: "S", panvel: "04:00", nerul: "04:13", vashi: "04:25", chembur: "04:40", cottonGreen: "04:44", vadala: "04:52", dadar: "04:58", dockyardRoad: "05:02", byculla: "05:07", csmt: "05:15", from: "PNVL" },
        { trainNo: "H104", type: "F", panvel: "04:20", vashi: "04:38", chembur: "04:52", cottonGreen: "04:56", vadala: "05:02", dadar: "05:08", dockyardRoad: "05:12", csmt: "05:20", from: "PNVL" },
        { trainNo: "H106", type: "S", panvel: "04:40", nerul: "04:53", vashi: "05:05", chembur: "05:20", cottonGreen: "05:24", vadala: "05:32", dadar: "05:38", dockyardRoad: "05:42", byculla: "05:47", csmt: "05:55", from: "PNVL" },
        { trainNo: "H108", type: "S", vashi: "05:00", chembur: "05:15", cottonGreen: "05:19", vadala: "05:27", dadar: "05:33", dockyardRoad: "05:37", byculla: "05:42", csmt: "05:50", from: "VSHI" },
        { trainNo: "H110", type: "F", panvel: "05:10", vashi: "05:28", chembur: "05:42", cottonGreen: "05:46", vadala: "05:52", dadar: "05:58", dockyardRoad: "06:02", csmt: "06:10", from: "PNVL" },
        { trainNo: "H112", type: "S", panvel: "05:30", nerul: "05:43", vashi: "05:55", chembur: "06:10", cottonGreen: "06:14", vadala: "06:22", dadar: "06:28", dockyardRoad: "06:32", byculla: "06:37", csmt: "06:45", from: "PNVL" },
        { trainNo: "H114", type: "S", vashi: "05:50", chembur: "06:05", cottonGreen: "06:09", vadala: "06:17", dadar: "06:23", dockyardRoad: "06:27", byculla: "06:32", csmt: "06:40", from: "VSHI" },
        { trainNo: "H116", type: "F", panvel: "06:00", vashi: "06:18", chembur: "06:32", cottonGreen: "06:36", vadala: "06:42", dadar: "06:48", dockyardRoad: "06:52", csmt: "07:00", from: "PNVL" },
        { trainNo: "H118", type: "S", panvel: "06:20", nerul: "06:33", vashi: "06:45", chembur: "07:00", cottonGreen: "07:04", vadala: "07:12", dadar: "07:18", dockyardRoad: "07:22", byculla: "07:27", csmt: "07:35", from: "PNVL" },
        { trainNo: "H120", type: "SF", panvel: "06:40", nerul: "06:51", vashi: "07:02", chembur: "07:15", cottonGreen: "07:19", vadala: "07:25", dadar: "07:31", dockyardRoad: "07:34", byculla: "07:38", csmt: "07:45", from: "PNVL" },
        { trainNo: "H122", type: "F", panvel: "07:00", vashi: "07:18", chembur: "07:32", cottonGreen: "07:36", vadala: "07:42", dadar: "07:48", dockyardRoad: "07:52", csmt: "08:00", from: "PNVL" },
        { trainNo: "H124", type: "S", panvel: "07:20", nerul: "07:33", vashi: "07:45", chembur: "08:00", cottonGreen: "08:04", vadala: "08:12", dadar: "08:18", dockyardRoad: "08:22", byculla: "08:27", csmt: "08:35", from: "PNVL" },
        { trainNo: "H126", type: "S", vashi: "07:40", chembur: "07:55", cottonGreen: "07:59", vadala: "08:07", dadar: "08:13", dockyardRoad: "08:17", byculla: "08:22", csmt: "08:30", from: "VSHI" },
        { trainNo: "H128", type: "F", panvel: "08:00", vashi: "08:18", chembur: "08:32", cottonGreen: "08:36", vadala: "08:42", dadar: "08:48", dockyardRoad: "08:52", csmt: "09:00", from: "PNVL" },
        { trainNo: "H130", type: "S", panvel: "08:30", nerul: "08:43", vashi: "08:55", chembur: "09:10", cottonGreen: "09:14", vadala: "09:22", dadar: "09:28", dockyardRoad: "09:32", byculla: "09:37", csmt: "09:45", from: "PNVL" },
        { trainNo: "H132", type: "S", panvel: "09:00", nerul: "09:13", vashi: "09:25", chembur: "09:40", cottonGreen: "09:44", vadala: "09:52", dadar: "09:58", dockyardRoad: "10:02", byculla: "10:07", csmt: "10:15", from: "PNVL" },
        { trainNo: "H134", type: "F", panvel: "09:30", vashi: "09:48", chembur: "10:02", cottonGreen: "10:06", vadala: "10:12", dadar: "10:18", dockyardRoad: "10:22", csmt: "10:30", from: "PNVL" },
        { trainNo: "H136", type: "S", panvel: "10:00", nerul: "10:13", vashi: "10:25", chembur: "10:40", cottonGreen: "10:44", vadala: "10:52", dadar: "10:58", dockyardRoad: "11:02", byculla: "11:07", csmt: "11:15", from: "PNVL" },
        { trainNo: "H138", type: "S", vashi: "10:30", chembur: "10:45", cottonGreen: "10:49", vadala: "10:57", dadar: "11:03", dockyardRoad: "11:07", byculla: "11:12", csmt: "11:20", from: "VSHI" },
        { trainNo: "H140", type: "F", panvel: "11:00", vashi: "11:18", chembur: "11:32", cottonGreen: "11:36", vadala: "11:42", dadar: "11:48", dockyardRoad: "11:52", csmt: "12:00", from: "PNVL" },
        { trainNo: "H142", type: "S", panvel: "12:00", nerul: "12:13", vashi: "12:25", chembur: "12:40", cottonGreen: "12:44", vadala: "12:52", dadar: "12:58", dockyardRoad: "13:02", byculla: "13:07", csmt: "13:15", from: "PNVL" },
        { trainNo: "H144", type: "F", panvel: "13:00", vashi: "13:18", chembur: "13:32", cottonGreen: "13:36", vadala: "13:42", dadar: "13:48", dockyardRoad: "13:52", csmt: "14:00", from: "PNVL" },
        { trainNo: "H146", type: "S", panvel: "14:00", nerul: "14:13", vashi: "14:25", chembur: "14:40", cottonGreen: "14:44", vadala: "14:52", dadar: "14:58", dockyardRoad: "15:02", byculla: "15:07", csmt: "15:15", from: "PNVL" },
        { trainNo: "H148", type: "SF", panvel: "15:00", nerul: "15:11", vashi: "15:22", chembur: "15:35", cottonGreen: "15:39", vadala: "15:45", dadar: "15:51", dockyardRoad: "15:54", byculla: "15:58", csmt: "16:05", from: "PNVL" },
        { trainNo: "H150", type: "F", panvel: "16:00", vashi: "16:18", chembur: "16:32", cottonGreen: "16:36", vadala: "16:42", dadar: "16:48", dockyardRoad: "16:52", csmt: "17:00", from: "PNVL" },
        { trainNo: "H152", type: "S", panvel: "17:00", nerul: "17:13", vashi: "17:25", chembur: "17:40", cottonGreen: "17:44", vadala: "17:52", dadar: "17:58", dockyardRoad: "18:02", byculla: "18:07", csmt: "18:15", from: "PNVL" },
        { trainNo: "H154", type: "F", panvel: "18:00", vashi: "18:18", chembur: "18:32", cottonGreen: "18:36", vadala: "18:42", dadar: "18:48", dockyardRoad: "18:52", csmt: "19:00", from: "PNVL" },
        { trainNo: "H156", type: "S", panvel: "19:00", nerul: "19:13", vashi: "19:25", chembur: "19:40", cottonGreen: "19:44", vadala: "19:52", dadar: "19:58", dockyardRoad: "20:02", byculla: "20:07", csmt: "20:15", from: "PNVL" },
        { trainNo: "H158", type: "S", vashi: "20:00", chembur: "20:15", cottonGreen: "20:19", vadala: "20:27", dadar: "20:33", dockyardRoad: "20:37", byculla: "20:42", csmt: "20:50", from: "VSHI" },
        { trainNo: "H160", type: "F", panvel: "21:00", vashi: "21:18", chembur: "21:32", cottonGreen: "21:36", vadala: "21:42", dadar: "21:48", dockyardRoad: "21:52", csmt: "22:00", from: "PNVL" },
    ],

    // TRANS HARBOUR LINE (Thane to Panvel)
    transHarbour: [
        { trainNo: "T101", type: "S", thane: "05:00", airoli: "05:10", rabale: "05:15", ghansoli: "05:20", koparKhairane: "05:26", turbhe: "05:32", vashi: "05:38", juinagar: "05:44", nerul: "05:50", panvel: "06:05", dir: "DOWN" },
        { trainNo: "T103", type: "S", thane: "05:30", airoli: "05:40", rabale: "05:45", ghansoli: "05:50", koparKhairane: "05:56", turbhe: "06:02", vashi: "06:08", juinagar: "06:14", nerul: "06:20", panvel: "06:35", dir: "DOWN" },
        { trainNo: "T105", type: "F", thane: "06:00", airoli: "06:08", koparKhairane: "06:20", vashi: "06:30", juinagar: "06:36", panvel: "06:50", dir: "DOWN" },
        { trainNo: "T107", type: "S", thane: "06:30", airoli: "06:40", rabale: "06:45", ghansoli: "06:50", koparKhairane: "06:56", turbhe: "07:02", vashi: "07:08", juinagar: "07:14", nerul: "07:20", panvel: "07:35", dir: "DOWN" },
        { trainNo: "T109", type: "S", thane: "07:00", airoli: "07:10", rabale: "07:15", ghansoli: "07:20", koparKhairane: "07:26", turbhe: "07:32", vashi: "07:38", juinagar: "07:44", nerul: "07:50", panvel: "08:05", dir: "DOWN" },
        { trainNo: "T111", type: "F", thane: "07:30", airoli: "07:38", koparKhairane: "07:50", vashi: "08:00", juinagar: "08:06", panvel: "08:20", dir: "DOWN" },
        { trainNo: "T113", type: "S", thane: "08:00", airoli: "08:10", rabale: "08:15", ghansoli: "08:20", koparKhairane: "08:26", turbhe: "08:32", vashi: "08:38", juinagar: "08:44", nerul: "08:50", panvel: "09:05", dir: "DOWN" },
        { trainNo: "T115", type: "S", thane: "09:00", airoli: "09:10", rabale: "09:15", ghansoli: "09:20", koparKhairane: "09:26", turbhe: "09:32", vashi: "09:38", juinagar: "09:44", nerul: "09:50", panvel: "10:05", dir: "DOWN" },
        { trainNo: "T117", type: "F", thane: "10:00", airoli: "10:08", koparKhairane: "10:20", vashi: "10:30", juinagar: "10:36", panvel: "10:50", dir: "DOWN" },
        { trainNo: "T119", type: "S", thane: "11:00", airoli: "11:10", rabale: "11:15", ghansoli: "11:20", koparKhairane: "11:26", turbhe: "11:32", vashi: "11:38", juinagar: "11:44", nerul: "11:50", panvel: "12:05", dir: "DOWN" },
        { trainNo: "T121", type: "S", thane: "12:00", airoli: "12:10", rabale: "12:15", ghansoli: "12:20", koparKhairane: "12:26", turbhe: "12:32", vashi: "12:38", juinagar: "12:44", nerul: "12:50", panvel: "13:05", dir: "DOWN" },
        { trainNo: "T123", type: "F", thane: "13:00", airoli: "13:08", koparKhairane: "13:20", vashi: "13:30", juinagar: "13:36", panvel: "13:50", dir: "DOWN" },
        { trainNo: "T125", type: "S", thane: "14:00", airoli: "14:10", rabale: "14:15", ghansoli: "14:20", koparKhairane: "14:26", turbhe: "14:32", vashi: "14:38", juinagar: "14:44", nerul: "14:50", panvel: "15:05", dir: "DOWN" },
        { trainNo: "T127", type: "S", thane: "15:00", airoli: "15:10", rabale: "15:15", ghansoli: "15:20", koparKhairane: "15:26", turbhe: "15:32", vashi: "15:38", juinagar: "15:44", nerul: "15:50", panvel: "16:05", dir: "DOWN" },
        { trainNo: "T129", type: "F", thane: "16:00", airoli: "16:08", koparKhairane: "16:20", vashi: "16:30", juinagar: "16:36", panvel: "16:50", dir: "DOWN" },
        { trainNo: "T131", type: "S", thane: "17:00", airoli: "17:10", rabale: "17:15", ghansoli: "17:20", koparKhairane: "17:26", turbhe: "17:32", vashi: "17:38", juinagar: "17:44", nerul: "17:50", panvel: "18:05", dir: "DOWN" },
        { trainNo: "T133", type: "S", thane: "18:00", airoli: "18:10", rabale: "18:15", ghansoli: "18:20", koparKhairane: "18:26", turbhe: "18:32", vashi: "18:38", juinagar: "18:44", nerul: "18:50", panvel: "19:05", dir: "DOWN" },
        { trainNo: "T135", type: "F", thane: "19:00", airoli: "19:08", koparKhairane: "19:20", vashi: "19:30", juinagar: "19:36", panvel: "19:50", dir: "DOWN" },
        { trainNo: "T137", type: "S", thane: "20:00", airoli: "20:10", rabale: "20:15", ghansoli: "20:20", koparKhairane: "20:26", turbhe: "20:32", vashi: "20:38", juinagar: "20:44", nerul: "20:50", panvel: "21:05", dir: "DOWN" },
        { trainNo: "T139", type: "S", thane: "21:00", airoli: "21:10", rabale: "21:15", ghansoli: "21:20", koparKhairane: "21:26", turbhe: "21:32", vashi: "21:38", juinagar: "21:44", nerul: "21:50", panvel: "22:05", dir: "DOWN" },
        // UP direction
        { trainNo: "T102", type: "S", panvel: "05:00", nerul: "05:15", juinagar: "05:21", vashi: "05:27", turbhe: "05:33", koparKhairane: "05:39", ghansoli: "05:45", rabale: "05:50", airoli: "05:55", thane: "06:05", dir: "UP" },
        { trainNo: "T104", type: "S", panvel: "05:30", nerul: "05:45", juinagar: "05:51", vashi: "05:57", turbhe: "06:03", koparKhairane: "06:09", ghansoli: "06:15", rabale: "06:20", airoli: "06:25", thane: "06:35", dir: "UP" },
        { trainNo: "T106", type: "F", panvel: "06:00", juinagar: "06:14", vashi: "06:20", koparKhairane: "06:30", airoli: "06:42", thane: "06:50", dir: "UP" },
        { trainNo: "T108", type: "S", panvel: "06:30", nerul: "06:45", juinagar: "06:51", vashi: "06:57", turbhe: "07:03", koparKhairane: "07:09", ghansoli: "07:15", rabale: "07:20", airoli: "07:25", thane: "07:35", dir: "UP" },
        { trainNo: "T110", type: "S", panvel: "07:00", nerul: "07:15", juinagar: "07:21", vashi: "07:27", turbhe: "07:33", koparKhairane: "07:39", ghansoli: "07:45", rabale: "07:50", airoli: "07:55", thane: "08:05", dir: "UP" },
        { trainNo: "T112", type: "F", panvel: "07:30", juinagar: "07:44", vashi: "07:50", koparKhairane: "08:00", airoli: "08:12", thane: "08:20", dir: "UP" },
        { trainNo: "T114", type: "S", panvel: "08:00", nerul: "08:15", juinagar: "08:21", vashi: "08:27", turbhe: "08:33", koparKhairane: "08:39", ghansoli: "08:45", rabale: "08:50", airoli: "08:55", thane: "09:05", dir: "UP" },
        { trainNo: "T116", type: "S", panvel: "09:00", nerul: "09:15", juinagar: "09:21", vashi: "09:27", turbhe: "09:33", koparKhairane: "09:39", ghansoli: "09:45", rabale: "09:50", airoli: "09:55", thane: "10:05", dir: "UP" },
        { trainNo: "T118", type: "F", panvel: "10:00", juinagar: "10:14", vashi: "10:20", koparKhairane: "10:30", airoli: "10:42", thane: "10:50", dir: "UP" },
        { trainNo: "T120", type: "S", panvel: "11:00", nerul: "11:15", juinagar: "11:21", vashi: "11:27", turbhe: "11:33", koparKhairane: "11:39", ghansoli: "11:45", rabale: "11:50", airoli: "11:55", thane: "12:05", dir: "UP" },
    ],

    // WESTERN HARBOUR (Goregaon/Andheri to CSMT via Bandra) - Comprehensive Schedule
    harbourWestern: [
        // DOWN direction (CSMT to Goregaon)
        { trainNo: "HW101", type: "S", csmt: "05:00", dadar: "05:12", cottonGreen: "05:15", vadala: "05:18", kingsCircle: "05:22", mahim: "05:26", bandra: "05:30", khar: "05:33", santacruz: "05:36", vileParle: "05:40", andheri: "05:44", jogeshwari: "05:48", ramMandir: "05:51", goregaon: "05:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW103", type: "S", csmt: "05:30", dadar: "05:42", cottonGreen: "05:45", vadala: "05:48", kingsCircle: "05:52", mahim: "05:56", bandra: "06:00", khar: "06:03", santacruz: "06:06", vileParle: "06:10", andheri: "06:14", jogeshwari: "06:18", ramMandir: "06:21", goregaon: "06:25", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW105", type: "S", csmt: "06:00", dadar: "06:12", cottonGreen: "06:15", vadala: "06:18", kingsCircle: "06:22", mahim: "06:26", bandra: "06:30", khar: "06:33", santacruz: "06:36", vileParle: "06:40", andheri: "06:44", jogeshwari: "06:48", ramMandir: "06:51", goregaon: "06:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW107", type: "S", csmt: "06:30", dadar: "06:42", cottonGreen: "06:45", vadala: "06:48", kingsCircle: "06:52", mahim: "06:56", bandra: "07:00", khar: "07:03", santacruz: "07:06", vileParle: "07:10", andheri: "07:14", jogeshwari: "07:18", ramMandir: "07:21", goregaon: "07:25", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW109", type: "S", csmt: "07:00", dadar: "07:12", cottonGreen: "07:15", vadala: "07:18", kingsCircle: "07:22", mahim: "07:26", bandra: "07:30", khar: "07:33", santacruz: "07:36", vileParle: "07:40", andheri: "07:44", jogeshwari: "07:48", ramMandir: "07:51", goregaon: "07:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW111", type: "S", csmt: "07:30", dadar: "07:42", cottonGreen: "07:45", vadala: "07:48", kingsCircle: "07:52", mahim: "07:56", bandra: "08:00", khar: "08:03", santacruz: "08:06", vileParle: "08:10", andheri: "08:14", jogeshwari: "08:18", ramMandir: "08:21", goregaon: "08:25", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW113", type: "S", csmt: "08:00", dadar: "08:12", cottonGreen: "08:15", vadala: "08:18", kingsCircle: "08:22", mahim: "08:26", bandra: "08:30", khar: "08:33", santacruz: "08:36", vileParle: "08:40", andheri: "08:44", jogeshwari: "08:48", ramMandir: "08:51", goregaon: "08:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW115", type: "S", csmt: "08:30", dadar: "08:42", cottonGreen: "08:45", vadala: "08:48", kingsCircle: "08:52", mahim: "08:56", bandra: "09:00", khar: "09:03", santacruz: "09:06", vileParle: "09:10", andheri: "09:14", jogeshwari: "09:18", ramMandir: "09:21", goregaon: "09:25", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW117", type: "S", csmt: "09:00", dadar: "09:12", cottonGreen: "09:15", vadala: "09:18", kingsCircle: "09:22", mahim: "09:26", bandra: "09:30", khar: "09:33", santacruz: "09:36", vileParle: "09:40", andheri: "09:44", jogeshwari: "09:48", ramMandir: "09:51", goregaon: "09:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW119", type: "S", csmt: "09:30", dadar: "09:42", cottonGreen: "09:45", vadala: "09:48", kingsCircle: "09:52", mahim: "09:56", bandra: "10:00", khar: "10:03", santacruz: "10:06", vileParle: "10:10", andheri: "10:14", jogeshwari: "10:18", ramMandir: "10:21", goregaon: "10:25", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW121", type: "S", csmt: "10:00", dadar: "10:12", cottonGreen: "10:15", vadala: "10:18", kingsCircle: "10:22", mahim: "10:26", bandra: "10:30", khar: "10:33", santacruz: "10:36", vileParle: "10:40", andheri: "10:44", jogeshwari: "10:48", ramMandir: "10:51", goregaon: "10:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW123", type: "S", csmt: "11:00", dadar: "11:12", cottonGreen: "11:15", vadala: "11:18", kingsCircle: "11:22", mahim: "11:26", bandra: "11:30", khar: "11:33", santacruz: "11:36", vileParle: "11:40", andheri: "11:44", jogeshwari: "11:48", ramMandir: "11:51", goregaon: "11:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW125", type: "S", csmt: "12:00", dadar: "12:12", cottonGreen: "12:15", vadala: "12:18", kingsCircle: "12:22", mahim: "12:26", bandra: "12:30", khar: "12:33", santacruz: "12:36", vileParle: "12:40", andheri: "12:44", jogeshwari: "12:48", ramMandir: "12:51", goregaon: "12:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW127", type: "S", csmt: "13:00", dadar: "13:12", cottonGreen: "13:15", vadala: "13:18", kingsCircle: "13:22", mahim: "13:26", bandra: "13:30", khar: "13:33", santacruz: "13:36", vileParle: "13:40", andheri: "13:44", jogeshwari: "13:48", ramMandir: "13:51", goregaon: "13:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW129", type: "S", csmt: "14:00", dadar: "14:12", cottonGreen: "14:15", vadala: "14:18", kingsCircle: "14:22", mahim: "14:26", bandra: "14:30", khar: "14:33", santacruz: "14:36", vileParle: "14:40", andheri: "14:44", jogeshwari: "14:48", ramMandir: "14:51", goregaon: "14:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW131", type: "S", csmt: "15:00", dadar: "15:12", cottonGreen: "15:15", vadala: "15:18", kingsCircle: "15:22", mahim: "15:26", bandra: "15:30", khar: "15:33", santacruz: "15:36", vileParle: "15:40", andheri: "15:44", jogeshwari: "15:48", ramMandir: "15:51", goregaon: "15:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW133", type: "S", csmt: "16:00", dadar: "16:12", cottonGreen: "16:15", vadala: "16:18", kingsCircle: "16:22", mahim: "16:26", bandra: "16:30", khar: "16:33", santacruz: "16:36", vileParle: "16:40", andheri: "16:44", jogeshwari: "16:48", ramMandir: "16:51", goregaon: "16:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW135", type: "S", csmt: "17:00", dadar: "17:12", cottonGreen: "17:15", vadala: "17:18", kingsCircle: "17:22", mahim: "17:26", bandra: "17:30", khar: "17:33", santacruz: "17:36", vileParle: "17:40", andheri: "17:44", jogeshwari: "17:48", ramMandir: "17:51", goregaon: "17:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW137", type: "S", csmt: "18:00", dadar: "18:12", cottonGreen: "18:15", vadala: "18:18", kingsCircle: "18:22", mahim: "18:26", bandra: "18:30", khar: "18:33", santacruz: "18:36", vileParle: "18:40", andheri: "18:44", jogeshwari: "18:48", ramMandir: "18:51", goregaon: "18:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW139", type: "S", csmt: "19:00", dadar: "19:12", cottonGreen: "19:15", vadala: "19:18", kingsCircle: "19:22", mahim: "19:26", bandra: "19:30", khar: "19:33", santacruz: "19:36", vileParle: "19:40", andheri: "19:44", jogeshwari: "19:48", ramMandir: "19:51", goregaon: "19:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW141", type: "S", csmt: "20:00", dadar: "20:12", cottonGreen: "20:15", vadala: "20:18", kingsCircle: "20:22", mahim: "20:26", bandra: "20:30", khar: "20:33", santacruz: "20:36", vileParle: "20:40", andheri: "20:44", jogeshwari: "20:48", ramMandir: "20:51", goregaon: "20:55", dest: "GMN", dir: "DOWN" },
        { trainNo: "HW143", type: "S", csmt: "21:00", dadar: "21:12", cottonGreen: "21:15", vadala: "21:18", kingsCircle: "21:22", mahim: "21:26", bandra: "21:30", khar: "21:33", santacruz: "21:36", vileParle: "21:40", andheri: "21:44", jogeshwari: "21:48", ramMandir: "21:51", goregaon: "21:55", dest: "GMN", dir: "DOWN" },
        // UP direction (Goregaon to CSMT)
        { trainNo: "HW102", type: "S", goregaon: "05:00", ramMandir: "05:04", jogeshwari: "05:07", andheri: "05:11", vileParle: "05:15", santacruz: "05:19", khar: "05:22", bandra: "05:26", mahim: "05:30", kingsCircle: "05:34", vadala: "05:38", cottonGreen: "05:41", dadar: "05:44", csmt: "05:58", from: "GMN", dir: "UP" },
        { trainNo: "HW104", type: "S", goregaon: "05:30", ramMandir: "05:34", jogeshwari: "05:37", andheri: "05:41", vileParle: "05:45", santacruz: "05:49", khar: "05:52", bandra: "05:56", mahim: "06:00", kingsCircle: "06:04", vadala: "06:08", cottonGreen: "06:11", dadar: "06:14", csmt: "06:28", from: "GMN", dir: "UP" },
        { trainNo: "HW106", type: "S", goregaon: "06:00", ramMandir: "06:04", jogeshwari: "06:07", andheri: "06:11", vileParle: "06:15", santacruz: "06:19", khar: "06:22", bandra: "06:26", mahim: "06:30", kingsCircle: "06:34", vadala: "06:38", cottonGreen: "06:41", dadar: "06:44", csmt: "06:58", from: "GMN", dir: "UP" },
        { trainNo: "HW108", type: "S", goregaon: "06:30", ramMandir: "06:34", jogeshwari: "06:37", andheri: "06:41", vileParle: "06:45", santacruz: "06:49", khar: "06:52", bandra: "06:56", mahim: "07:00", kingsCircle: "07:04", vadala: "07:08", cottonGreen: "07:11", dadar: "07:14", csmt: "07:28", from: "GMN", dir: "UP" },
        { trainNo: "HW110", type: "S", goregaon: "07:00", ramMandir: "07:04", jogeshwari: "07:07", andheri: "07:11", vileParle: "07:15", santacruz: "07:19", khar: "07:22", bandra: "07:26", mahim: "07:30", kingsCircle: "07:34", vadala: "07:38", cottonGreen: "07:41", dadar: "07:44", csmt: "07:58", from: "GMN", dir: "UP" },
        { trainNo: "HW112", type: "S", goregaon: "07:30", ramMandir: "07:34", jogeshwari: "07:37", andheri: "07:41", vileParle: "07:45", santacruz: "07:49", khar: "07:52", bandra: "07:56", mahim: "08:00", kingsCircle: "08:04", vadala: "08:08", cottonGreen: "08:11", dadar: "08:14", csmt: "08:28", from: "GMN", dir: "UP" },
        { trainNo: "HW114", type: "S", goregaon: "08:00", ramMandir: "08:04", jogeshwari: "08:07", andheri: "08:11", vileParle: "08:15", santacruz: "08:19", khar: "08:22", bandra: "08:26", mahim: "08:30", kingsCircle: "08:34", vadala: "08:38", cottonGreen: "08:41", dadar: "08:44", csmt: "08:58", from: "GMN", dir: "UP" },
        { trainNo: "HW116", type: "S", goregaon: "08:30", ramMandir: "08:34", jogeshwari: "08:37", andheri: "08:41", vileParle: "08:45", santacruz: "08:49", khar: "08:52", bandra: "08:56", mahim: "09:00", kingsCircle: "09:04", vadala: "09:08", cottonGreen: "09:11", dadar: "09:14", csmt: "09:28", from: "GMN", dir: "UP" },
        { trainNo: "HW118", type: "S", goregaon: "09:00", ramMandir: "09:04", jogeshwari: "09:07", andheri: "09:11", vileParle: "09:15", santacruz: "09:19", khar: "09:22", bandra: "09:26", mahim: "09:30", kingsCircle: "09:34", vadala: "09:38", cottonGreen: "09:41", dadar: "09:44", csmt: "09:58", from: "GMN", dir: "UP" },
        { trainNo: "HW120", type: "S", goregaon: "09:30", ramMandir: "09:34", jogeshwari: "09:37", andheri: "09:41", vileParle: "09:45", santacruz: "09:49", khar: "09:52", bandra: "09:56", mahim: "10:00", kingsCircle: "10:04", vadala: "10:08", cottonGreen: "10:11", dadar: "10:14", csmt: "10:28", from: "GMN", dir: "UP" },
        { trainNo: "HW122", type: "S", goregaon: "10:00", ramMandir: "10:04", jogeshwari: "10:07", andheri: "10:11", vileParle: "10:15", santacruz: "10:19", khar: "10:22", bandra: "10:26", mahim: "10:30", kingsCircle: "10:34", vadala: "10:38", cottonGreen: "10:41", dadar: "10:44", csmt: "10:58", from: "GMN", dir: "UP" },
        { trainNo: "HW124", type: "S", goregaon: "11:00", ramMandir: "11:04", jogeshwari: "11:07", andheri: "11:11", vileParle: "11:15", santacruz: "11:19", khar: "11:22", bandra: "11:26", mahim: "11:30", kingsCircle: "11:34", vadala: "11:38", cottonGreen: "11:41", dadar: "11:44", csmt: "11:58", from: "GMN", dir: "UP" },
        { trainNo: "HW126", type: "S", goregaon: "12:00", ramMandir: "12:04", jogeshwari: "12:07", andheri: "12:11", vileParle: "12:15", santacruz: "12:19", khar: "12:22", bandra: "12:26", mahim: "12:30", kingsCircle: "12:34", vadala: "12:38", cottonGreen: "12:41", dadar: "12:44", csmt: "12:58", from: "GMN", dir: "UP" },
        { trainNo: "HW128", type: "S", goregaon: "13:00", ramMandir: "13:04", jogeshwari: "13:07", andheri: "13:11", vileParle: "13:15", santacruz: "13:19", khar: "13:22", bandra: "13:26", mahim: "13:30", kingsCircle: "13:34", vadala: "13:38", cottonGreen: "13:41", dadar: "13:44", csmt: "13:58", from: "GMN", dir: "UP" },
        { trainNo: "HW130", type: "S", goregaon: "14:00", ramMandir: "14:04", jogeshwari: "14:07", andheri: "14:11", vileParle: "14:15", santacruz: "14:19", khar: "14:22", bandra: "14:26", mahim: "14:30", kingsCircle: "14:34", vadala: "14:38", cottonGreen: "14:41", dadar: "14:44", csmt: "14:58", from: "GMN", dir: "UP" },
        { trainNo: "HW132", type: "S", goregaon: "15:00", ramMandir: "15:04", jogeshwari: "15:07", andheri: "15:11", vileParle: "15:15", santacruz: "15:19", khar: "15:22", bandra: "15:26", mahim: "15:30", kingsCircle: "15:34", vadala: "15:38", cottonGreen: "15:41", dadar: "15:44", csmt: "15:58", from: "GMN", dir: "UP" },
        { trainNo: "HW134", type: "S", goregaon: "16:00", ramMandir: "16:04", jogeshwari: "16:07", andheri: "16:11", vileParle: "16:15", santacruz: "16:19", khar: "16:22", bandra: "16:26", mahim: "16:30", kingsCircle: "16:34", vadala: "16:38", cottonGreen: "16:41", dadar: "16:44", csmt: "16:58", from: "GMN", dir: "UP" },
        { trainNo: "HW136", type: "S", goregaon: "17:00", ramMandir: "17:04", jogeshwari: "17:07", andheri: "17:11", vileParle: "17:15", santacruz: "17:19", khar: "17:22", bandra: "17:26", mahim: "17:30", kingsCircle: "17:34", vadala: "17:38", cottonGreen: "17:41", dadar: "17:44", csmt: "17:58", from: "GMN", dir: "UP" },
        { trainNo: "HW138", type: "S", goregaon: "18:00", ramMandir: "18:04", jogeshwari: "18:07", andheri: "18:11", vileParle: "18:15", santacruz: "18:19", khar: "18:22", bandra: "18:26", mahim: "18:30", kingsCircle: "18:34", vadala: "18:38", cottonGreen: "18:41", dadar: "18:44", csmt: "18:58", from: "GMN", dir: "UP" },
        { trainNo: "HW140", type: "S", goregaon: "19:00", ramMandir: "19:04", jogeshwari: "19:07", andheri: "19:11", vileParle: "19:15", santacruz: "19:19", khar: "19:22", bandra: "19:26", mahim: "19:30", kingsCircle: "19:34", vadala: "19:38", cottonGreen: "19:41", dadar: "19:44", csmt: "19:58", from: "GMN", dir: "UP" },
        { trainNo: "HW142", type: "S", goregaon: "20:00", ramMandir: "20:04", jogeshwari: "20:07", andheri: "20:11", vileParle: "20:15", santacruz: "20:19", khar: "20:22", bandra: "20:26", mahim: "20:30", kingsCircle: "20:34", vadala: "20:38", cottonGreen: "20:41", dadar: "20:44", csmt: "20:58", from: "GMN", dir: "UP" },
        { trainNo: "HW144", type: "S", goregaon: "21:00", ramMandir: "21:04", jogeshwari: "21:07", andheri: "21:11", vileParle: "21:15", santacruz: "21:19", khar: "21:22", bandra: "21:26", mahim: "21:30", kingsCircle: "21:34", vadala: "21:38", cottonGreen: "21:41", dadar: "21:44", csmt: "21:58", from: "GMN", dir: "UP" },
    ],

    // WESTERN LINE - DOWN (Churchgate to Virar)
    westernDown: [
        { trainNo: "W101", type: "S", churchgate: "04:30", marineLines: "04:33", charniRoad: "04:36", grantRoad: "04:39", mumbaiCentral: "04:43", mahalakshmi: "04:47", lowerParel: "04:50", prabhadevi: "04:53", dadar: "04:57", matungaRoad: "05:00", mahim: "05:03", bandra: "05:08", khar: "05:11", santacruz: "05:14", vileParle: "05:18", andheri: "05:22", jogeshwari: "05:26", goregaon: "05:30", malad: "05:35", kandivali: "05:40", borivali: "05:45", dest: "BVI" },
        { trainNo: "W103", type: "F", churchgate: "05:00", mumbaiCentral: "05:08", dadar: "05:16", bandra: "05:24", andheri: "05:32", borivali: "05:45", dest: "BVI" },
        { trainNo: "W105", type: "S", churchgate: "05:15", marineLines: "05:18", charniRoad: "05:21", grantRoad: "05:24", mumbaiCentral: "05:28", mahalakshmi: "05:32", lowerParel: "05:35", prabhadevi: "05:38", dadar: "05:42", matungaRoad: "05:45", mahim: "05:48", bandra: "05:53", khar: "05:56", santacruz: "05:59", vileParle: "06:03", andheri: "06:07", jogeshwari: "06:11", goregaon: "06:15", malad: "06:20", kandivali: "06:25", borivali: "06:30", dahisar: "06:35", miraRoad: "06:40", bhayandar: "06:45", naigaon: "06:50", vasai: "06:55", virar: "07:05", dest: "VR" },
        { trainNo: "W107", type: "S", churchgate: "05:30", marineLines: "05:33", charniRoad: "05:36", grantRoad: "05:39", mumbaiCentral: "05:43", mahalakshmi: "05:47", lowerParel: "05:50", prabhadevi: "05:53", dadar: "05:57", matungaRoad: "06:00", mahim: "06:03", bandra: "06:08", khar: "06:11", santacruz: "06:14", vileParle: "06:18", andheri: "06:22", jogeshwari: "06:26", goregaon: "06:30", malad: "06:35", kandivali: "06:40", borivali: "06:45", dest: "BVI" },
        { trainNo: "W109", type: "F", churchgate: "05:45", mumbaiCentral: "05:53", dadar: "06:01", bandra: "06:09", andheri: "06:17", borivali: "06:30", virar: "06:55", dest: "VR" },
        { trainNo: "W111", type: "S", churchgate: "06:00", marineLines: "06:03", charniRoad: "06:06", grantRoad: "06:09", mumbaiCentral: "06:13", mahalakshmi: "06:17", lowerParel: "06:20", prabhadevi: "06:23", dadar: "06:27", matungaRoad: "06:30", mahim: "06:33", bandra: "06:38", khar: "06:41", santacruz: "06:44", vileParle: "06:48", andheri: "06:52", jogeshwari: "06:56", goregaon: "07:00", malad: "07:05", kandivali: "07:10", borivali: "07:15", dest: "BVI" },
        { trainNo: "W113", type: "S", churchgate: "06:15", marineLines: "06:18", charniRoad: "06:21", grantRoad: "06:24", mumbaiCentral: "06:28", mahalakshmi: "06:32", lowerParel: "06:35", prabhadevi: "06:38", dadar: "06:42", matungaRoad: "06:45", mahim: "06:48", bandra: "06:53", khar: "06:56", santacruz: "06:59", vileParle: "07:03", andheri: "07:07", jogeshwari: "07:11", goregaon: "07:15", malad: "07:20", kandivali: "07:25", borivali: "07:30", dahisar: "07:35", miraRoad: "07:40", bhayandar: "07:45", naigaon: "07:50", vasai: "07:55", virar: "08:05", dest: "VR" },
        { trainNo: "W115", type: "F", churchgate: "06:30", mumbaiCentral: "06:38", dadar: "06:46", bandra: "06:54", andheri: "07:02", borivali: "07:15", dest: "BVI" },
        { trainNo: "W117", type: "S", churchgate: "06:45", marineLines: "06:48", charniRoad: "06:51", grantRoad: "06:54", mumbaiCentral: "06:58", mahalakshmi: "07:02", lowerParel: "07:05", prabhadevi: "07:08", dadar: "07:12", matungaRoad: "07:15", mahim: "07:18", bandra: "07:23", khar: "07:26", santacruz: "07:29", vileParle: "07:33", andheri: "07:37", jogeshwari: "07:41", goregaon: "07:45", malad: "07:50", kandivali: "07:55", borivali: "08:00", dest: "BVI" },
        { trainNo: "W119", type: "SF", churchgate: "07:00", marineLines: "07:03", grantRoad: "07:08", mumbaiCentral: "07:12", dadar: "07:20", bandra: "07:28", andheri: "07:36", goregaon: "07:44", borivali: "07:55", dest: "BVI" },
        { trainNo: "W121", type: "S", churchgate: "07:15", marineLines: "07:18", charniRoad: "07:21", grantRoad: "07:24", mumbaiCentral: "07:28", mahalakshmi: "07:32", lowerParel: "07:35", prabhadevi: "07:38", dadar: "07:42", matungaRoad: "07:45", mahim: "07:48", bandra: "07:53", khar: "07:56", santacruz: "07:59", vileParle: "08:03", andheri: "08:07", jogeshwari: "08:11", goregaon: "08:15", malad: "08:20", kandivali: "08:25", borivali: "08:30", dahisar: "08:35", miraRoad: "08:40", bhayandar: "08:45", naigaon: "08:50", vasai: "08:55", virar: "09:05", dest: "VR" },
        { trainNo: "W123", type: "F", churchgate: "07:30", mumbaiCentral: "07:38", dadar: "07:46", bandra: "07:54", andheri: "08:02", borivali: "08:15", virar: "08:40", dest: "VR" },
        { trainNo: "W125", type: "S", churchgate: "07:45", marineLines: "07:48", charniRoad: "07:51", grantRoad: "07:54", mumbaiCentral: "07:58", mahalakshmi: "08:02", lowerParel: "08:05", prabhadevi: "08:08", dadar: "08:12", matungaRoad: "08:15", mahim: "08:18", bandra: "08:23", khar: "08:26", santacruz: "08:29", vileParle: "08:33", andheri: "08:37", jogeshwari: "08:41", goregaon: "08:45", malad: "08:50", kandivali: "08:55", borivali: "09:00", dest: "BVI" },
        { trainNo: "W127", type: "S", churchgate: "08:00", marineLines: "08:03", charniRoad: "08:06", grantRoad: "08:09", mumbaiCentral: "08:13", mahalakshmi: "08:17", lowerParel: "08:20", prabhadevi: "08:23", dadar: "08:27", matungaRoad: "08:30", mahim: "08:33", bandra: "08:38", khar: "08:41", santacruz: "08:44", vileParle: "08:48", andheri: "08:52", jogeshwari: "08:56", goregaon: "09:00", malad: "09:05", kandivali: "09:10", borivali: "09:15", dest: "BVI" },
        { trainNo: "W129", type: "F", churchgate: "08:15", mumbaiCentral: "08:23", dadar: "08:31", bandra: "08:39", andheri: "08:47", borivali: "09:00", dest: "BVI" },
        { trainNo: "W131", type: "S", churchgate: "08:30", marineLines: "08:33", charniRoad: "08:36", grantRoad: "08:39", mumbaiCentral: "08:43", mahalakshmi: "08:47", lowerParel: "08:50", prabhadevi: "08:53", dadar: "08:57", matungaRoad: "09:00", mahim: "09:03", bandra: "09:08", khar: "09:11", santacruz: "09:14", vileParle: "09:18", andheri: "09:22", jogeshwari: "09:26", goregaon: "09:30", malad: "09:35", kandivali: "09:40", borivali: "09:45", dahisar: "09:50", miraRoad: "09:55", bhayandar: "10:00", naigaon: "10:05", vasai: "10:10", virar: "10:20", dest: "VR" },
        { trainNo: "W133", type: "S", churchgate: "09:00", marineLines: "09:03", charniRoad: "09:06", grantRoad: "09:09", mumbaiCentral: "09:13", mahalakshmi: "09:17", lowerParel: "09:20", prabhadevi: "09:23", dadar: "09:27", matungaRoad: "09:30", mahim: "09:33", bandra: "09:38", khar: "09:41", santacruz: "09:44", vileParle: "09:48", andheri: "09:52", jogeshwari: "09:56", goregaon: "10:00", malad: "10:05", kandivali: "10:10", borivali: "10:15", dest: "BVI" },
        { trainNo: "W135", type: "F", churchgate: "09:30", mumbaiCentral: "09:38", dadar: "09:46", bandra: "09:54", andheri: "10:02", borivali: "10:15", virar: "10:40", dest: "VR" },
        { trainNo: "W137", type: "S", churchgate: "10:00", marineLines: "10:03", charniRoad: "10:06", grantRoad: "10:09", mumbaiCentral: "10:13", mahalakshmi: "10:17", lowerParel: "10:20", prabhadevi: "10:23", dadar: "10:27", matungaRoad: "10:30", mahim: "10:33", bandra: "10:38", khar: "10:41", santacruz: "10:44", vileParle: "10:48", andheri: "10:52", jogeshwari: "10:56", goregaon: "11:00", malad: "11:05", kandivali: "11:10", borivali: "11:15", dest: "BVI" },
        { trainNo: "W139", type: "S", churchgate: "11:00", marineLines: "11:03", charniRoad: "11:06", grantRoad: "11:09", mumbaiCentral: "11:13", mahalakshmi: "11:17", lowerParel: "11:20", prabhadevi: "11:23", dadar: "11:27", matungaRoad: "11:30", mahim: "11:33", bandra: "11:38", khar: "11:41", santacruz: "11:44", vileParle: "11:48", andheri: "11:52", jogeshwari: "11:56", goregaon: "12:00", malad: "12:05", kandivali: "12:10", borivali: "12:15", dahisar: "12:20", miraRoad: "12:25", bhayandar: "12:30", naigaon: "12:35", vasai: "12:40", virar: "12:50", dest: "VR" },
        { trainNo: "W141", type: "F", churchgate: "12:00", mumbaiCentral: "12:08", dadar: "12:16", bandra: "12:24", andheri: "12:32", borivali: "12:45", dest: "BVI" },
        { trainNo: "W143", type: "S", churchgate: "13:00", marineLines: "13:03", charniRoad: "13:06", grantRoad: "13:09", mumbaiCentral: "13:13", mahalakshmi: "13:17", lowerParel: "13:20", prabhadevi: "13:23", dadar: "13:27", matungaRoad: "13:30", mahim: "13:33", bandra: "13:38", khar: "13:41", santacruz: "13:44", vileParle: "13:48", andheri: "13:52", jogeshwari: "13:56", goregaon: "14:00", malad: "14:05", kandivali: "14:10", borivali: "14:15", dest: "BVI" },
        { trainNo: "W145", type: "F", churchgate: "14:00", mumbaiCentral: "14:08", dadar: "14:16", bandra: "14:24", andheri: "14:32", borivali: "14:45", virar: "15:10", dest: "VR" },
        { trainNo: "W147", type: "S", churchgate: "15:00", marineLines: "15:03", charniRoad: "15:06", grantRoad: "15:09", mumbaiCentral: "15:13", mahalakshmi: "15:17", lowerParel: "15:20", prabhadevi: "15:23", dadar: "15:27", matungaRoad: "15:30", mahim: "15:33", bandra: "15:38", khar: "15:41", santacruz: "15:44", vileParle: "15:48", andheri: "15:52", jogeshwari: "15:56", goregaon: "16:00", malad: "16:05", kandivali: "16:10", borivali: "16:15", dahisar: "16:20", miraRoad: "16:25", bhayandar: "16:30", naigaon: "16:35", vasai: "16:40", virar: "16:50", dest: "VR" },
        { trainNo: "W149", type: "SF", churchgate: "16:00", marineLines: "16:03", grantRoad: "16:08", mumbaiCentral: "16:12", dadar: "16:20", bandra: "16:28", andheri: "16:36", goregaon: "16:44", borivali: "16:55", dest: "BVI" },
        { trainNo: "W151", type: "S", churchgate: "17:00", marineLines: "17:03", charniRoad: "17:06", grantRoad: "17:09", mumbaiCentral: "17:13", mahalakshmi: "17:17", lowerParel: "17:20", prabhadevi: "17:23", dadar: "17:27", matungaRoad: "17:30", mahim: "17:33", bandra: "17:38", khar: "17:41", santacruz: "17:44", vileParle: "17:48", andheri: "17:52", jogeshwari: "17:56", goregaon: "18:00", malad: "18:05", kandivali: "18:10", borivali: "18:15", dest: "BVI" },
        { trainNo: "W153", type: "F", churchgate: "17:30", mumbaiCentral: "17:38", dadar: "17:46", bandra: "17:54", andheri: "18:02", borivali: "18:15", virar: "18:40", dest: "VR" },
        { trainNo: "W155", type: "S", churchgate: "18:00", marineLines: "18:03", charniRoad: "18:06", grantRoad: "18:09", mumbaiCentral: "18:13", mahalakshmi: "18:17", lowerParel: "18:20", prabhadevi: "18:23", dadar: "18:27", matungaRoad: "18:30", mahim: "18:33", bandra: "18:38", khar: "18:41", santacruz: "18:44", vileParle: "18:48", andheri: "18:52", jogeshwari: "18:56", goregaon: "19:00", malad: "19:05", kandivali: "19:10", borivali: "19:15", dahisar: "19:20", miraRoad: "19:25", bhayandar: "19:30", naigaon: "19:35", vasai: "19:40", virar: "19:50", dest: "VR" },
        { trainNo: "W157", type: "SF", churchgate: "19:00", marineLines: "19:03", grantRoad: "19:08", mumbaiCentral: "19:12", dadar: "19:20", bandra: "19:28", andheri: "19:36", goregaon: "19:44", borivali: "19:55", dest: "BVI" },
        { trainNo: "W159", type: "S", churchgate: "20:00", marineLines: "20:03", charniRoad: "20:06", grantRoad: "20:09", mumbaiCentral: "20:13", mahalakshmi: "20:17", lowerParel: "20:20", prabhadevi: "20:23", dadar: "20:27", matungaRoad: "20:30", mahim: "20:33", bandra: "20:38", khar: "20:41", santacruz: "20:44", vileParle: "20:48", andheri: "20:52", jogeshwari: "20:56", goregaon: "21:00", malad: "21:05", kandivali: "21:10", borivali: "21:15", dest: "BVI" },
        { trainNo: "W161", type: "F", churchgate: "21:00", mumbaiCentral: "21:08", dadar: "21:16", bandra: "21:24", andheri: "21:32", borivali: "21:45", virar: "22:10", dest: "VR" },
        { trainNo: "W163", type: "S", churchgate: "22:00", marineLines: "22:03", charniRoad: "22:06", grantRoad: "22:09", mumbaiCentral: "22:13", mahalakshmi: "22:17", lowerParel: "22:20", prabhadevi: "22:23", dadar: "22:27", matungaRoad: "22:30", mahim: "22:33", bandra: "22:38", khar: "22:41", santacruz: "22:44", vileParle: "22:48", andheri: "22:52", jogeshwari: "22:56", goregaon: "23:00", malad: "23:05", kandivali: "23:10", borivali: "23:15", dest: "BVI" },
    ],

    // WESTERN LINE - UP (Virar to Churchgate)
    westernUp: [
        { trainNo: "W102", type: "S", borivali: "04:30", kandivali: "04:35", malad: "04:40", goregaon: "04:45", jogeshwari: "04:49", andheri: "04:53", vileParle: "04:57", santacruz: "05:01", khar: "05:04", bandra: "05:09", mahim: "05:14", matungaRoad: "05:17", dadar: "05:21", prabhadevi: "05:24", lowerParel: "05:27", mahalakshmi: "05:31", mumbaiCentral: "05:35", grantRoad: "05:38", charniRoad: "05:41", marineLines: "05:44", churchgate: "05:48", from: "BVI" },
        { trainNo: "W104", type: "F", virar: "04:30", borivali: "04:55", andheri: "05:08", bandra: "05:16", dadar: "05:24", mumbaiCentral: "05:32", churchgate: "05:40", from: "VR" },
        { trainNo: "W106", type: "S", virar: "04:45", vasai: "04:55", naigaon: "05:00", bhayandar: "05:05", miraRoad: "05:10", dahisar: "05:15", borivali: "05:20", kandivali: "05:25", malad: "05:30", goregaon: "05:35", jogeshwari: "05:39", andheri: "05:43", vileParle: "05:47", santacruz: "05:51", khar: "05:54", bandra: "05:59", mahim: "06:04", matungaRoad: "06:07", dadar: "06:11", prabhadevi: "06:14", lowerParel: "06:17", mahalakshmi: "06:21", mumbaiCentral: "06:25", grantRoad: "06:28", charniRoad: "06:31", marineLines: "06:34", churchgate: "06:38", from: "VR" },
        { trainNo: "W108", type: "S", borivali: "05:00", kandivali: "05:05", malad: "05:10", goregaon: "05:15", jogeshwari: "05:19", andheri: "05:23", vileParle: "05:27", santacruz: "05:31", khar: "05:34", bandra: "05:39", mahim: "05:44", matungaRoad: "05:47", dadar: "05:51", prabhadevi: "05:54", lowerParel: "05:57", mahalakshmi: "06:01", mumbaiCentral: "06:05", grantRoad: "06:08", charniRoad: "06:11", marineLines: "06:14", churchgate: "06:18", from: "BVI" },
        { trainNo: "W110", type: "F", virar: "05:15", borivali: "05:40", andheri: "05:53", bandra: "06:01", dadar: "06:09", mumbaiCentral: "06:17", churchgate: "06:25", from: "VR" },
        { trainNo: "W112", type: "S", borivali: "05:30", kandivali: "05:35", malad: "05:40", goregaon: "05:45", jogeshwari: "05:49", andheri: "05:53", vileParle: "05:57", santacruz: "06:01", khar: "06:04", bandra: "06:09", mahim: "06:14", matungaRoad: "06:17", dadar: "06:21", prabhadevi: "06:24", lowerParel: "06:27", mahalakshmi: "06:31", mumbaiCentral: "06:35", grantRoad: "06:38", charniRoad: "06:41", marineLines: "06:44", churchgate: "06:48", from: "BVI" },
        { trainNo: "W114", type: "S", virar: "05:30", vasai: "05:40", naigaon: "05:45", bhayandar: "05:50", miraRoad: "05:55", dahisar: "06:00", borivali: "06:05", kandivali: "06:10", malad: "06:15", goregaon: "06:20", jogeshwari: "06:24", andheri: "06:28", vileParle: "06:32", santacruz: "06:36", khar: "06:39", bandra: "06:44", mahim: "06:49", matungaRoad: "06:52", dadar: "06:56", prabhadevi: "06:59", lowerParel: "07:02", mahalakshmi: "07:06", mumbaiCentral: "07:10", grantRoad: "07:13", charniRoad: "07:16", marineLines: "07:19", churchgate: "07:23", from: "VR" },
        { trainNo: "W116", type: "F", borivali: "06:00", andheri: "06:13", bandra: "06:21", dadar: "06:29", mumbaiCentral: "06:37", churchgate: "06:45", from: "BVI" },
        { trainNo: "W118", type: "S", borivali: "06:15", kandivali: "06:20", malad: "06:25", goregaon: "06:30", jogeshwari: "06:34", andheri: "06:38", vileParle: "06:42", santacruz: "06:46", khar: "06:49", bandra: "06:54", mahim: "06:59", matungaRoad: "07:02", dadar: "07:06", prabhadevi: "07:09", lowerParel: "07:12", mahalakshmi: "07:16", mumbaiCentral: "07:20", grantRoad: "07:23", charniRoad: "07:26", marineLines: "07:29", churchgate: "07:33", from: "BVI" },
        { trainNo: "W120", type: "SF", borivali: "06:30", goregaon: "06:41", andheri: "06:49", bandra: "06:57", dadar: "07:05", mumbaiCentral: "07:13", grantRoad: "07:17", marineLines: "07:22", churchgate: "07:26", from: "BVI" },
        { trainNo: "W122", type: "S", virar: "06:15", vasai: "06:25", naigaon: "06:30", bhayandar: "06:35", miraRoad: "06:40", dahisar: "06:45", borivali: "06:50", kandivali: "06:55", malad: "07:00", goregaon: "07:05", jogeshwari: "07:09", andheri: "07:13", vileParle: "07:17", santacruz: "07:21", khar: "07:24", bandra: "07:29", mahim: "07:34", matungaRoad: "07:37", dadar: "07:41", prabhadevi: "07:44", lowerParel: "07:47", mahalakshmi: "07:51", mumbaiCentral: "07:55", grantRoad: "07:58", charniRoad: "08:01", marineLines: "08:04", churchgate: "08:08", from: "VR" },
        { trainNo: "W124", type: "F", virar: "06:45", borivali: "07:10", andheri: "07:23", bandra: "07:31", dadar: "07:39", mumbaiCentral: "07:47", churchgate: "07:55", from: "VR" },
        { trainNo: "W126", type: "S", borivali: "07:00", kandivali: "07:05", malad: "07:10", goregaon: "07:15", jogeshwari: "07:19", andheri: "07:23", vileParle: "07:27", santacruz: "07:31", khar: "07:34", bandra: "07:39", mahim: "07:44", matungaRoad: "07:47", dadar: "07:51", prabhadevi: "07:54", lowerParel: "07:57", mahalakshmi: "08:01", mumbaiCentral: "08:05", grantRoad: "08:08", charniRoad: "08:11", marineLines: "08:14", churchgate: "08:18", from: "BVI" },
        { trainNo: "W128", type: "S", borivali: "07:15", kandivali: "07:20", malad: "07:25", goregaon: "07:30", jogeshwari: "07:34", andheri: "07:38", vileParle: "07:42", santacruz: "07:46", khar: "07:49", bandra: "07:54", mahim: "07:59", matungaRoad: "08:02", dadar: "08:06", prabhadevi: "08:09", lowerParel: "08:12", mahalakshmi: "08:16", mumbaiCentral: "08:20", grantRoad: "08:23", charniRoad: "08:26", marineLines: "08:29", churchgate: "08:33", from: "BVI" },
        { trainNo: "W130", type: "F", borivali: "07:30", andheri: "07:43", bandra: "07:51", dadar: "07:59", mumbaiCentral: "08:07", churchgate: "08:15", from: "BVI" },
        { trainNo: "W132", type: "S", virar: "07:00", vasai: "07:10", naigaon: "07:15", bhayandar: "07:20", miraRoad: "07:25", dahisar: "07:30", borivali: "07:35", kandivali: "07:40", malad: "07:45", goregaon: "07:50", jogeshwari: "07:54", andheri: "07:58", vileParle: "08:02", santacruz: "08:06", khar: "08:09", bandra: "08:14", mahim: "08:19", matungaRoad: "08:22", dadar: "08:26", prabhadevi: "08:29", lowerParel: "08:32", mahalakshmi: "08:36", mumbaiCentral: "08:40", grantRoad: "08:43", charniRoad: "08:46", marineLines: "08:49", churchgate: "08:53", from: "VR" },
        { trainNo: "W134", type: "S", borivali: "08:00", kandivali: "08:05", malad: "08:10", goregaon: "08:15", jogeshwari: "08:19", andheri: "08:23", vileParle: "08:27", santacruz: "08:31", khar: "08:34", bandra: "08:39", mahim: "08:44", matungaRoad: "08:47", dadar: "08:51", prabhadevi: "08:54", lowerParel: "08:57", mahalakshmi: "09:01", mumbaiCentral: "09:05", grantRoad: "09:08", charniRoad: "09:11", marineLines: "09:14", churchgate: "09:18", from: "BVI" },
        { trainNo: "W136", type: "F", virar: "07:45", borivali: "08:10", andheri: "08:23", bandra: "08:31", dadar: "08:39", mumbaiCentral: "08:47", churchgate: "08:55", from: "VR" },
        { trainNo: "W138", type: "S", borivali: "09:00", kandivali: "09:05", malad: "09:10", goregaon: "09:15", jogeshwari: "09:19", andheri: "09:23", vileParle: "09:27", santacruz: "09:31", khar: "09:34", bandra: "09:39", mahim: "09:44", matungaRoad: "09:47", dadar: "09:51", prabhadevi: "09:54", lowerParel: "09:57", mahalakshmi: "10:01", mumbaiCentral: "10:05", grantRoad: "10:08", charniRoad: "10:11", marineLines: "10:14", churchgate: "10:18", from: "BVI" },
        { trainNo: "W140", type: "F", virar: "08:30", borivali: "08:55", andheri: "09:08", bandra: "09:16", dadar: "09:24", mumbaiCentral: "09:32", churchgate: "09:40", from: "VR" },
        { trainNo: "W142", type: "S", virar: "09:00", vasai: "09:10", naigaon: "09:15", bhayandar: "09:20", miraRoad: "09:25", dahisar: "09:30", borivali: "09:35", kandivali: "09:40", malad: "09:45", goregaon: "09:50", jogeshwari: "09:54", andheri: "09:58", vileParle: "10:02", santacruz: "10:06", khar: "10:09", bandra: "10:14", mahim: "10:19", matungaRoad: "10:22", dadar: "10:26", prabhadevi: "10:29", lowerParel: "10:32", mahalakshmi: "10:36", mumbaiCentral: "10:40", grantRoad: "10:43", charniRoad: "10:46", marineLines: "10:49", churchgate: "10:53", from: "VR" },
        { trainNo: "W144", type: "S", borivali: "10:00", kandivali: "10:05", malad: "10:10", goregaon: "10:15", jogeshwari: "10:19", andheri: "10:23", vileParle: "10:27", santacruz: "10:31", khar: "10:34", bandra: "10:39", mahim: "10:44", matungaRoad: "10:47", dadar: "10:51", prabhadevi: "10:54", lowerParel: "10:57", mahalakshmi: "11:01", mumbaiCentral: "11:05", grantRoad: "11:08", charniRoad: "11:11", marineLines: "11:14", churchgate: "11:18", from: "BVI" },
        { trainNo: "W146", type: "F", borivali: "11:00", andheri: "11:13", bandra: "11:21", dadar: "11:29", mumbaiCentral: "11:37", churchgate: "11:45", from: "BVI" },
        { trainNo: "W148", type: "S", virar: "10:30", vasai: "10:40", naigaon: "10:45", bhayandar: "10:50", miraRoad: "10:55", dahisar: "11:00", borivali: "11:05", kandivali: "11:10", malad: "11:15", goregaon: "11:20", jogeshwari: "11:24", andheri: "11:28", vileParle: "11:32", santacruz: "11:36", khar: "11:39", bandra: "11:44", mahim: "11:49", matungaRoad: "11:52", dadar: "11:56", prabhadevi: "11:59", lowerParel: "12:02", mahalakshmi: "12:06", mumbaiCentral: "12:10", grantRoad: "12:13", charniRoad: "12:16", marineLines: "12:19", churchgate: "12:23", from: "VR" },
        { trainNo: "W150", type: "S", borivali: "12:00", kandivali: "12:05", malad: "12:10", goregaon: "12:15", jogeshwari: "12:19", andheri: "12:23", vileParle: "12:27", santacruz: "12:31", khar: "12:34", bandra: "12:39", mahim: "12:44", matungaRoad: "12:47", dadar: "12:51", prabhadevi: "12:54", lowerParel: "12:57", mahalakshmi: "13:01", mumbaiCentral: "13:05", grantRoad: "13:08", charniRoad: "13:11", marineLines: "13:14", churchgate: "13:18", from: "BVI" },
        { trainNo: "W152", type: "F", virar: "12:00", borivali: "12:25", andheri: "12:38", bandra: "12:46", dadar: "12:54", mumbaiCentral: "13:02", churchgate: "13:10", from: "VR" },
        { trainNo: "W154", type: "S", borivali: "14:00", kandivali: "14:05", malad: "14:10", goregaon: "14:15", jogeshwari: "14:19", andheri: "14:23", vileParle: "14:27", santacruz: "14:31", khar: "14:34", bandra: "14:39", mahim: "14:44", matungaRoad: "14:47", dadar: "14:51", prabhadevi: "14:54", lowerParel: "14:57", mahalakshmi: "15:01", mumbaiCentral: "15:05", grantRoad: "15:08", charniRoad: "15:11", marineLines: "15:14", churchgate: "15:18", from: "BVI" },
        { trainNo: "W156", type: "F", virar: "14:00", borivali: "14:25", andheri: "14:38", bandra: "14:46", dadar: "14:54", mumbaiCentral: "15:02", churchgate: "15:10", from: "VR" },
        { trainNo: "W158", type: "S", virar: "15:00", vasai: "15:10", naigaon: "15:15", bhayandar: "15:20", miraRoad: "15:25", dahisar: "15:30", borivali: "15:35", kandivali: "15:40", malad: "15:45", goregaon: "15:50", jogeshwari: "15:54", andheri: "15:58", vileParle: "16:02", santacruz: "16:06", khar: "16:09", bandra: "16:14", mahim: "16:19", matungaRoad: "16:22", dadar: "16:26", prabhadevi: "16:29", lowerParel: "16:32", mahalakshmi: "16:36", mumbaiCentral: "16:40", grantRoad: "16:43", charniRoad: "16:46", marineLines: "16:49", churchgate: "16:53", from: "VR" },
        { trainNo: "W160", type: "SF", borivali: "16:00", goregaon: "16:11", andheri: "16:19", bandra: "16:27", dadar: "16:35", mumbaiCentral: "16:43", grantRoad: "16:47", marineLines: "16:52", churchgate: "16:56", from: "BVI" },
        { trainNo: "W162", type: "S", borivali: "17:00", kandivali: "17:05", malad: "17:10", goregaon: "17:15", jogeshwari: "17:19", andheri: "17:23", vileParle: "17:27", santacruz: "17:31", khar: "17:34", bandra: "17:39", mahim: "17:44", matungaRoad: "17:47", dadar: "17:51", prabhadevi: "17:54", lowerParel: "17:57", mahalakshmi: "18:01", mumbaiCentral: "18:05", grantRoad: "18:08", charniRoad: "18:11", marineLines: "18:14", churchgate: "18:18", from: "BVI" },
        { trainNo: "W164", type: "F", virar: "16:30", borivali: "16:55", andheri: "17:08", bandra: "17:16", dadar: "17:24", mumbaiCentral: "17:32", churchgate: "17:40", from: "VR" },
        { trainNo: "W166", type: "S", virar: "17:00", vasai: "17:10", naigaon: "17:15", bhayandar: "17:20", miraRoad: "17:25", dahisar: "17:30", borivali: "17:35", kandivali: "17:40", malad: "17:45", goregaon: "17:50", jogeshwari: "17:54", andheri: "17:58", vileParle: "18:02", santacruz: "18:06", khar: "18:09", bandra: "18:14", mahim: "18:19", matungaRoad: "18:22", dadar: "18:26", prabhadevi: "18:29", lowerParel: "18:32", mahalakshmi: "18:36", mumbaiCentral: "18:40", grantRoad: "18:43", charniRoad: "18:46", marineLines: "18:49", churchgate: "18:53", from: "VR" },
        { trainNo: "W168", type: "SF", borivali: "18:00", goregaon: "18:11", andheri: "18:19", bandra: "18:27", dadar: "18:35", mumbaiCentral: "18:43", grantRoad: "18:47", marineLines: "18:52", churchgate: "18:56", from: "BVI" },
        { trainNo: "W170", type: "S", borivali: "19:00", kandivali: "19:05", malad: "19:10", goregaon: "19:15", jogeshwari: "19:19", andheri: "19:23", vileParle: "19:27", santacruz: "19:31", khar: "19:34", bandra: "19:39", mahim: "19:44", matungaRoad: "19:47", dadar: "19:51", prabhadevi: "19:54", lowerParel: "19:57", mahalakshmi: "20:01", mumbaiCentral: "20:05", grantRoad: "20:08", charniRoad: "20:11", marineLines: "20:14", churchgate: "20:18", from: "BVI" },
        { trainNo: "W172", type: "F", virar: "18:30", borivali: "18:55", andheri: "19:08", bandra: "19:16", dadar: "19:24", mumbaiCentral: "19:32", churchgate: "19:40", from: "VR" },
        { trainNo: "W174", type: "S", virar: "19:00", vasai: "19:10", naigaon: "19:15", bhayandar: "19:20", miraRoad: "19:25", dahisar: "19:30", borivali: "19:35", kandivali: "19:40", malad: "19:45", goregaon: "19:50", jogeshwari: "19:54", andheri: "19:58", vileParle: "20:02", santacruz: "20:06", khar: "20:09", bandra: "20:14", mahim: "20:19", matungaRoad: "20:22", dadar: "20:26", prabhadevi: "20:29", lowerParel: "20:32", mahalakshmi: "20:36", mumbaiCentral: "20:40", grantRoad: "20:43", charniRoad: "20:46", marineLines: "20:49", churchgate: "20:53", from: "VR" },
        { trainNo: "W176", type: "S", borivali: "20:30", kandivali: "20:35", malad: "20:40", goregaon: "20:45", jogeshwari: "20:49", andheri: "20:53", vileParle: "20:57", santacruz: "21:01", khar: "21:04", bandra: "21:09", mahim: "21:14", matungaRoad: "21:17", dadar: "21:21", prabhadevi: "21:24", lowerParel: "21:27", mahalakshmi: "21:31", mumbaiCentral: "21:35", grantRoad: "21:38", charniRoad: "21:41", marineLines: "21:44", churchgate: "21:48", from: "BVI" },
        { trainNo: "W178", type: "F", virar: "20:30", borivali: "20:55", andheri: "21:08", bandra: "21:16", dadar: "21:24", mumbaiCentral: "21:32", churchgate: "21:40", from: "VR" },
        { trainNo: "W180", type: "S", borivali: "22:00", kandivali: "22:05", malad: "22:10", goregaon: "22:15", jogeshwari: "22:19", andheri: "22:23", vileParle: "22:27", santacruz: "22:31", khar: "22:34", bandra: "22:39", mahim: "22:44", matungaRoad: "22:47", dadar: "22:51", prabhadevi: "22:54", lowerParel: "22:57", mahalakshmi: "23:01", mumbaiCentral: "23:05", grantRoad: "23:08", charniRoad: "23:11", marineLines: "23:14", churchgate: "23:18", from: "BVI" },
    ]
};

// Station mappings
export const stationCodes = {
    csmt: 'csmt', byculla: 'byculla', dadar: 'dadar-central', kurla: 'kurla',
    ghatkopar: 'ghatkopar', thane: 'thane', dombivli: 'dombivli', kalyan: 'kalyan',
    karjat: 'karjat', kasara: 'kasara', vadala: 'vadala-road', chembur: 'chembur',
    vashi: 'vashi', nerul: 'nerul', panvel: 'panvel', airoli: 'airoli',
    rabale: 'rabale', ghansoli: 'ghansoli', koparKhairane: 'kopar-khairane', turbhe: 'turbhe',
    // New stations
    shahad: 'shahad', ambivli: 'ambivli', titwala: 'titwala', khadavli: 'khadavli',
    vasind: 'vasind', asangaon: 'asangaon', atgaon: 'atgaon',
    vitthalwadi: 'vitthalwadi', ulhasnagar: 'ulhasnagar', ambernath: 'ambernath',
    badlapur: 'badlapur', vangani: 'vangani', shelu: 'shelu', neral: 'neral',
    bhivpuri: 'bhivpuri',
    kingsCircle: 'kingsCircle', mahim: 'mahim', bandra: 'bandra', khar: 'khar',
    santacruz: 'santacruz', vileParle: 'vileParle', andheri: 'andheri',
    jogeshwari: 'jogeshwari', ramMandir: 'ramMandir', goregaon: 'goregaon',

    // Western Line
    dahanu: 'dahanu', virar: 'virar', nalasopara: 'nalasopara', vasai: 'vasai',
    naigaon: 'naigaon', bhayandar: 'bhayandar', miraRoad: 'miraRoad', dahisar: 'dahisar',
    borivali: 'borivali', kandivali: 'kandivali', malad: 'malad',
    matungaRoad: 'matungaRoad', prabhadevi: 'prabhadevi', lowerParel: 'lowerParel',
    mahalakshmi: 'mahalakshmi', mumbaiCentral: 'mumbaiCentral', grantRoad: 'grantRoad',
    charniRoad: 'charniRoad', marineLines: 'marineLines', churchgate: 'churchgate'
};

// Find trains at a station at given time
export function findTrainsAtStation(stationCode, time, rangeMinutes = 15) {
    const [hours, minutes] = time.split(':').map(Number);
    const targetMins = hours * 60 + minutes;
    const results = [];

    Object.entries(trainTimings).forEach(([line, trains]) => {
        trains.forEach(train => {
            const depTime = train[stationCode];
            if (!depTime) return;

            const [h, m] = depTime.split(':').map(Number);
            const trainMins = h * 60 + m;
            const diff = Math.abs(trainMins - targetMins);

            if (diff <= rangeMinutes || (1440 - diff) <= rangeMinutes) {
                results.push({ ...train, line, departureTime: depTime });
            }
        });
    });

    return results.sort((a, b) => {
        const [aH, aM] = a.departureTime.split(':').map(Number);
        const [bH, bM] = b.departureTime.split(':').map(Number);
        return (aH * 60 + aM) - (bH * 60 + bM);
    });
}

// Get next N trains from a station
export function getNextTrains(stationCode, time, count = 5) {
    const [hours, minutes] = time.split(':').map(Number);
    const targetMins = hours * 60 + minutes;
    const results = [];

    Object.entries(trainTimings).forEach(([line, trains]) => {
        trains.forEach(train => {
            const depTime = train[stationCode];
            if (!depTime) return;

            const [h, m] = depTime.split(':').map(Number);
            const trainMins = h * 60 + m;
            let wait = trainMins - targetMins;
            if (wait < 0) wait += 1440;

            results.push({ ...train, line, departureTime: depTime, waitMinutes: wait });
        });
    });

    return results.sort((a, b) => a.waitMinutes - b.waitMinutes).slice(0, count);
}

// Get all trains on a specific line
export function getTrainsByLine(lineName) {
    return trainTimings[lineName] || [];
}

// Station name to code mapping - includes ALL stations
const stationNameToCode = {
    // Central Line stations (Common)
    'CSMT': 'csmt', 'Masjid': 'masjid', 'Sandhurst Road': 'sandhurstRoad', 'Byculla': 'byculla',
    'Chinchpokli': 'chinchpokli', 'Currey Road': 'curreyRoad', 'Parel': 'parel', 'Dadar': 'dadar',
    'Matunga': 'matunga', 'Sion': 'sion', 'Kurla': 'kurla', 'Vidyavihar': 'vidyavihar',
    'Ghatkopar': 'ghatkopar', 'Vikhroli': 'vikhroli', 'Kanjurmarg': 'kanjurmarg', 'Bhandup': 'bhandup',
    'Mulund': 'mulund', 'Thane': 'thane', 'Kalwa': 'kalwa', 'Mumbra': 'mumbra', 'Diva': 'diva',
    'Kopar': 'kopar', 'Dombivli': 'dombivli', 'Thakurli': 'thakurli', 'Kalyan': 'kalyan',

    // Kasara branch
    'Shahad': 'shahad', 'Ambivli': 'ambivli', 'Titwala': 'titwala', 'Khadavli': 'khadavli',
    'Vasind': 'vasind', 'Asangaon': 'asangaon', 'Atgaon': 'atgaon', 'Thansit': 'thansit',
    'Khardi': 'khardi', 'Umbramali': 'umbramali', 'Kasara': 'kasara',

    // Karjat branch
    'Vitthalwadi': 'vitthalwadi', 'Ulhasnagar': 'ulhasnagar', 'Ambernath': 'ambernath',
    'Badlapur': 'badlapur', 'Vangani': 'vangani', 'Shelu': 'shelu', 'Neral': 'neral',
    'Bhivpuri Road': 'bhivpuri', 'Karjat': 'karjat',

    // Harbour Line stations (CSMT to Panvel branch)
    'Dockyard Road': 'dockyardRoad', 'Reay Road': 'reayRoad', 'Cotton Green': 'cottonGreen',
    'Sewri': 'sewri', 'Vadala Road': 'vadala', 'GTB Nagar': 'gtbNagar', 'Chunabhatti': 'chunabhatti',
    'Tilak Nagar': 'tilakNagar', 'Chembur': 'chembur', 'Mankhurd': 'mankhurd',
    // Harbour/Trans-Harbour Middle
    'Vashi': 'vashi', 'Sanpada': 'sanpada', 'Juinagar': 'juinagar', 'Nerul': 'nerul',
    'Seawoods': 'seawoods', 'Belapur': 'belapur', 'Kharghar': 'kharghar',
    'Mansarovar': 'mansarovar', 'Khandeshwar': 'khandeshwar', 'Panvel': 'panvel',

    // Harbour Line Extension (Western Line connection)
    'Kings Circle': 'kingsCircle', 'Mahim': 'mahim', 'Bandra': 'bandra', 'Khar Road': 'khar',
    'Santacruz': 'santacruz', 'Vile Parle': 'vileParle', 'Andheri': 'andheri',
    'Jogeshwari': 'jogeshwari', 'Ram Mandir': 'ramMandir', 'Goregaon': 'goregaon',

    // Trans Harbour Line
    'Airoli': 'airoli', 'Rabale': 'rabale', 'Ghansoli': 'ghansoli',
    'Kopar Khairane': 'koparKhairane', 'Turbhe': 'turbhe',

    // Western Line
    'Dahanu Road': 'dahanu', 'Virar': 'virar', 'Nalasopara': 'nalasopara', 'Vasai Road': 'vasai',
    'Naigaon': 'naigaon', 'Bhayandar': 'bhayandar', 'Mira Road': 'miraRoad', 'Dahisar': 'dahisar',
    'Borivali': 'borivali', 'Kandivali': 'kandivali', 'Malad': 'malad',
    'Matunga Road': 'matungaRoad', 'Prabhadevi': 'prabhadevi',
    'Lower Parel': 'lowerParel', 'Mahalakshmi': 'mahalakshmi', 'Mumbai Central': 'mumbaiCentral',
    'Grant Road': 'grantRoad', 'Charni Road': 'charniRoad', 'Marine Lines': 'marineLines',
    'Churchgate': 'churchgate'
};

// Intermediate station timing offsets (minutes from reference major station)
// For DOWN: offset added to 'after' station time
// For UP: offset subtracted from 'before' station time
const intermediateStations = {
    // Between CSMT and Byculla (Central/Harbour common)
    'masjid': {
        down: { after: 'csmt', offset: 3 },
        up: { before: 'csmt', offset: 3 }
    },
    'sandhurstRoad': {
        down: { after: 'csmt', offset: 5 },
        up: { before: 'byculla', offset: 5 }
    },
    // Between Byculla and Dadar (Central line - between byculla and dadar)
    'chinchpokli': {
        down: { after: 'byculla', offset: 3 },
        up: { before: 'byculla', offset: 3 }
    },
    'curreyRoad': {
        down: { after: 'byculla', offset: 6 },
        up: { before: 'dadar', offset: 8 }
    },
    'parel': {
        down: { after: 'byculla', offset: 8 },
        up: { before: 'dadar', offset: 5 }
    },
    // Between Thane and Dombivli (Central line)
    'kalwa': {
        down: { after: 'thane', offset: 4 },
        up: { before: 'thane', offset: 4 }
    },
    'mumbra': {
        down: { after: 'thane', offset: 9 },
        up: { before: 'thane', offset: 9 }
    },
    'diva': {
        down: { after: 'thane', offset: 14 },
        up: { before: 'thane', offset: 14 }
    },
    'kopar': {
        down: { after: 'thane', offset: 18 },
        up: { before: 'dombivli', offset: 4 }
    },
    'thakurli': {
        down: { after: 'dombivli', offset: 4 },
        up: { before: 'kalyan', offset: 6 }
    },
    // Between Ghatkopar and Thane
    'vikhroli': {
        down: { after: 'ghatkopar', offset: 5 },
        up: { before: 'ghatkopar', offset: 5 }
    },
    'kanjurmarg': {
        down: { after: 'ghatkopar', offset: 9 },
        up: { before: 'ghatkopar', offset: 9 }
    },
    'bhandup': {
        down: { after: 'ghatkopar', offset: 12 },
        up: { before: 'ghatkopar', offset: 12 }
    },
    'mulund': {
        down: { after: 'ghatkopar', offset: 15 },
        up: { before: 'thane', offset: 3 }
    },
    // Between Kurla and Ghatkopar
    'vidyavihar': {
        down: { after: 'kurla', offset: 3 },
        up: { before: 'kurla', offset: 3 }
    },
    // Between Dadar and Kurla
    'matunga': {
        down: { after: 'dadar', offset: 4 },
        up: { before: 'dadar', offset: 4 }
    },
    'sion': {
        down: { after: 'dadar', offset: 8 },
        up: { before: 'kurla', offset: 4 }
    },

    // --- Harbour Line (offsets from vadala) ---
    'dockyardRoad': {
        down: { before: 'vadala', offset: 8 },
        up: { after: 'vadala', offset: 8 }
    },
    'reayRoad': {
        down: { before: 'vadala', offset: 6 },
        up: { after: 'vadala', offset: 6 }
    },
    'cottonGreen': {
        down: { before: 'vadala', offset: 4 },
        up: { after: 'vadala', offset: 4 }
    },
    'sewri': {
        down: { before: 'vadala', offset: 2 },
        up: { after: 'vadala', offset: 2 }
    },
    // After Vadala towards Panvel
    'gtbNagar': {
        down: { after: 'vadala', offset: 3 },
        up: { before: 'vadala', offset: 3 }
    },
    'chunabhatti': {
        down: { after: 'vadala', offset: 6 },
        up: { before: 'chembur', offset: 6 }
    },
    'tilakNagar': {
        down: { after: 'vadala', offset: 9 },
        up: { before: 'chembur', offset: 3 }
    },
    'mankhurd': {
        down: { after: 'chembur', offset: 5 },
        up: { before: 'vashi', offset: 8 }
    },

    // --- New Branch Stations (Offsets from Kalyan) ---
    // Karjat Branch
    'vitthalwadi': { down: { after: 'kalyan', offset: 5 }, up: { before: 'kalyan', offset: 5 } },
    'ulhasnagar': { down: { after: 'kalyan', offset: 9 }, up: { before: 'kalyan', offset: 9 } },
    'ambernath': { down: { after: 'kalyan', offset: 14 }, up: { before: 'kalyan', offset: 14 } },
    'badlapur': { down: { after: 'kalyan', offset: 22 }, up: { before: 'kalyan', offset: 22 } },
    'vangani': { down: { after: 'kalyan', offset: 32 }, up: { before: 'kalyan', offset: 32 } },
    'shelu': { down: { after: 'kalyan', offset: 36 }, up: { before: 'kalyan', offset: 36 } },
    'neral': { down: { after: 'kalyan', offset: 40 }, up: { before: 'kalyan', offset: 40 } },
    'bhivpuri': { down: { after: 'kalyan', offset: 47 }, up: { before: 'kalyan', offset: 47 } },
    'karjat': { down: { after: 'kalyan', offset: 56 }, up: { before: 'kalyan', offset: 56 } },

    // Kasara Branch
    'shahad': { down: { after: 'kalyan', offset: 5 }, up: { before: 'kalyan', offset: 5 } },
    'ambivli': { down: { after: 'kalyan', offset: 10 }, up: { before: 'kalyan', offset: 10 } },
    'titwala': { down: { after: 'kalyan', offset: 16 }, up: { before: 'kalyan', offset: 16 } },
    'khadavli': { down: { after: 'kalyan', offset: 23 }, up: { before: 'kalyan', offset: 23 } },
    'vasind': { down: { after: 'kalyan', offset: 30 }, up: { before: 'kalyan', offset: 30 } },
    'asangaon': { down: { after: 'kalyan', offset: 36 }, up: { before: 'kalyan', offset: 36 } },
    'atgaon': { down: { after: 'kalyan', offset: 46 }, up: { before: 'kalyan', offset: 46 } },
    'thansit': { down: { after: 'kalyan', offset: 51 }, up: { before: 'kalyan', offset: 51 } },
    'khardi': { down: { after: 'kalyan', offset: 57 }, up: { before: 'kalyan', offset: 57 } },
    'umbramali': { down: { after: 'kalyan', offset: 62 }, up: { before: 'kalyan', offset: 62 } },
    'kasara': { down: { after: 'kalyan', offset: 72 }, up: { before: 'kalyan', offset: 72 } },

    // --- Harbour Extension (Western) (Offsets from Vadala) ---
    // Note: These are rough estimates for simulation
    'kingsCircle': { down: { before: 'vadala', offset: 4 }, up: { after: 'vadala', offset: 4 } },
    'mahim': { down: { before: 'vadala', offset: 8 }, up: { after: 'vadala', offset: 8 } },
    'bandra': { down: { before: 'vadala', offset: 12 }, up: { after: 'vadala', offset: 12 } },
    'khar': { down: { before: 'vadala', offset: 15 }, up: { after: 'vadala', offset: 15 } },
    'santacruz': { down: { before: 'vadala', offset: 18 }, up: { after: 'vadala', offset: 18 } },
    'vileParle': { down: { before: 'vadala', offset: 21 }, up: { after: 'vadala', offset: 21 } },
    'andheri': { down: { before: 'vadala', offset: 26 }, up: { after: 'vadala', offset: 26 } },
    'jogeshwari': { down: { before: 'vadala', offset: 30 }, up: { after: 'vadala', offset: 30 } },
    'ramMandir': { down: { before: 'vadala', offset: 33 }, up: { after: 'vadala', offset: 33 } },
    'goregaon': { down: { before: 'vadala', offset: 36 }, up: { after: 'vadala', offset: 36 } },

    // --- Trans-Harbour / Harbour Shared (Offsets from Nerul) ---
    // Sanpada -> Vashi is close, Nerul is further.
    // Vashi (0) - Sanpada (3) - Juinagar (6) - Nerul (9)
    'sanpada': {
        down: { before: 'nerul', offset: 6 }, // DOWN is towards Panvel. Nerul is after Sanpada.
        up: { after: 'nerul', offset: 6 }     // UP is towards Thane/CSMT. Nerul is before Sanpada.
    },
    'juinagar': {
        down: { before: 'nerul', offset: 3 },
        up: { after: 'nerul', offset: 3 }
    },
    // Nerul (0) - Seawoods (4) - Belapur (8) - Kharghar (12) - Mansarovar (16) - Khandeshwar (19) - Panvel (23)
    'seawoods': { down: { after: 'nerul', offset: 4 }, up: { before: 'nerul', offset: 4 } },
    'belapur': { down: { after: 'nerul', offset: 8 }, up: { before: 'nerul', offset: 8 } },
    'kharghar': { down: { after: 'nerul', offset: 12 }, up: { before: 'nerul', offset: 12 } },
    'mansarovar': { down: { after: 'nerul', offset: 16 }, up: { before: 'nerul', offset: 16 } },
    'khandeshwar': { down: { after: 'nerul', offset: 19 }, up: { before: 'nerul', offset: 19 } },

    // --- Western Line Extended (Offsets from Virar) ---
    'nalasopara': {
        down: { before: 'virar', offset: 5 },
        up: { after: 'virar', offset: 5 }
    },
};

// Get line name from line key
function getLineName(lineKey) {
    const lineNames = {
        centralDown: 'Central Line',
        centralUp: 'Central Line',
        harbourDown: 'Harbour Line',
        harbourUp: 'Harbour Line',
        harbourWestern: 'Harbour Line',
        transHarbour: 'Trans Harbour Line',
        westernDown: 'Western Line',
        westernUp: 'Western Line',
        western: 'Western Line'
    };
    return lineNames[lineKey] || 'Unknown';
}

// Get direction description
function getDirection(train, lineKey) {
    if (lineKey.includes('Down')) {
        return `Down (${train.dest || 'Terminal'})`;
    } else if (lineKey.includes('Up')) {
        return `Up (${train.from || 'CSMT'})`;
    } else if (train.dir === 'DOWN') {
        return 'Down (Panvel)';
    } else {
        return 'Up (Thane)';
    }
}

// Get upcoming trains for a station (compatible with AvailableTrains component)
export function getUpcomingTrains(stationName, currentTime, count = 5) {
    // Convert station name to code
    let stationCode = stationNameToCode[stationName];
    if (!stationCode) {
        // Try lowercase match
        stationCode = stationName.toLowerCase().replace(/\s+/g, '');
    }

    const [hours, minutes] = currentTime.split(':').map(Number);
    const currentMins = hours * 60 + minutes;
    const results = [];

    // Check if this is an intermediate station
    const intermediate = intermediateStations[stationCode];

    Object.entries(trainTimings).forEach(([lineKey, trains]) => {
        trains.forEach(train => {
            let depTime = train[stationCode];

            // If station not directly in train data, try to calculate from major station
            if (!depTime && intermediate) {
                // Determine direction based on lineKey
                const isUp = lineKey.includes('Up') || train.dir === 'UP';
                const dirConfig = isUp ? intermediate.up : intermediate.down;

                if (dirConfig) {
                    const refStation = isUp ? dirConfig.before : dirConfig.after;
                    const majorStationTime = train[refStation];

                    if (majorStationTime) {
                        const [h, m] = majorStationTime.split(':').map(Number);
                        let totalMins;

                        if (isUp) {
                            // For UP trains, subtract offset (station comes before reference)
                            totalMins = h * 60 + m - dirConfig.offset;
                            if (totalMins < 0) totalMins += 1440;
                        } else {
                            // For DOWN trains, add offset (station comes after reference)
                            totalMins = h * 60 + m + dirConfig.offset;
                            if (totalMins >= 1440) totalMins -= 1440;
                        }

                        const newH = Math.floor(totalMins / 60);
                        const newM = totalMins % 60;
                        depTime = `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`;
                    }
                }
            }

            if (!depTime) return;

            const [h, m] = depTime.split(':').map(Number);
            const trainMins = h * 60 + m;
            let waitMins = trainMins - currentMins;
            if (waitMins < 0) waitMins += 1440; // Next day

            results.push({
                trainNo: train.trainNo,
                type: train.type,
                time: depTime,
                line: getLineName(lineKey),
                direction: getDirection(train, lineKey),
                platform: train.type === 'F' ? '1' : (train.type === 'SF' ? '2' : '3'),
                minutesUntil: waitMins
            });
        });
    });

    return results.sort((a, b) => a.minutesUntil - b.minutesUntil).slice(0, count);
}


// Format minutes until train arrives
export function formatMinutesUntil(minutes) {
    if (minutes <= 0) return 'Now';
    if (minutes < 60) return `${minutes} min`;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hrs}h ${mins}m` : `${hrs}h`;
}

// Station order for determining UP/DOWN direction
export const centralLineOrder = [
    'CSMT', 'Masjid', 'Sandhurst Road', 'Byculla', 'Chinchpokli', 'Currey Road', 'Parel',
    'Dadar', 'Matunga', 'Sion', 'Kurla', 'Vidyavihar', 'Ghatkopar', 'Vikhroli', 'Kanjurmarg',
    'Bhandup', 'Mulund', 'Thane', 'Kalwa', 'Mumbra', 'Diva', 'Kopar', 'Dombivli', 'Thakurli', 'Kalyan',
    // Branch splits here, but for ordering we can treat them as continuations for direction logic
    // We'll put Karjat branch first
    'Vitthalwadi', 'Ulhasnagar', 'Ambernath', 'Badlapur', 'Vangani', 'Shelu', 'Neral', 'Bhivpuri Road', 'Karjat',
    // Kasara branch
    'Shahad', 'Ambivli', 'Titwala', 'Khadavli', 'Vasind', 'Asangaon', 'Atgaon', 'Thansit', 'Khardi', 'Umbramali', 'Kasara'
];

export const harbourLineOrder = [
    // Western Extension
    'Goregaon', 'Ram Mandir', 'Jogeshwari', 'Andheri', 'Vile Parle', 'Santacruz', 'Khar Road', 'Bandra', 'Mahim', 'Kings Circle',
    // Common
    'Vadala Road', 'Sewri', 'Cotton Green', 'Reay Road', 'Dockyard Road',
    // CSMT Branch
    'Sandhurst Road', 'Masjid', 'CSMT',
    // Panvel Branch (from Vadala)
    'GTB Nagar', 'Chunabhatti', 'Tilak Nagar', 'Chembur', 'Mankhurd',
    'Vashi', 'Sanpada', 'Juinagar', 'Nerul', 'Seawoods', 'Belapur', 'Kharghar', 'Mansarovar',
    'Khandeshwar', 'Panvel'
];

// Helper to check standard harbour line (CSMT to Panvel)
export const harbourStandardOrder = [
    'CSMT', 'Masjid', 'Sandhurst Road', 'Dockyard Road', 'Reay Road', 'Cotton Green', 'Sewri', 'Vadala Road',
    'GTB Nagar', 'Chunabhatti', 'Tilak Nagar', 'Chembur', 'Mankhurd',
    'Vashi', 'Sanpada', 'Juinagar', 'Nerul', 'Seawoods', 'Belapur', 'Kharghar', 'Mansarovar',
    'Khandeshwar', 'Panvel'
];

// Helper to check Western Harbour line (Goregaon to CSMT)
export const harbourWesternOrder = [
    'CSMT', 'Masjid', 'Sandhurst Road', 'Dockyard Road', 'Reay Road', 'Cotton Green', 'Sewri', 'Vadala Road',
    'Kings Circle', 'Mahim', 'Bandra', 'Khar Road', 'Santacruz', 'Vile Parle', 'Andheri',
    'Jogeshwari', 'Ram Mandir', 'Goregaon'
];

// Western Line (Churchgate to Virar)
export const westernLineOrder = [
    'Churchgate', 'Marine Lines', 'Charni Road', 'Grant Road', 'Mumbai Central', 'Mahalakshmi', 'Lower Parel',
    'Prabhadevi', 'Dadar', 'Matunga Road', 'Mahim', 'Bandra', 'Khar Road', 'Santacruz', 'Vile Parle',
    'Andheri', 'Jogeshwari', 'Ram Mandir', 'Goregaon', 'Malad', 'Kandivali', 'Borivali',
    'Dahisar', 'Mira Road', 'Bhayandar', 'Naigaon', 'Vasai Road', 'Nalasopara', 'Virar'
];

export const transHarbourOrder = [
    'Thane', 'Airoli', 'Rabale', 'Ghansoli', 'Kopar Khairane', 'Turbhe', 'Vashi',
    'Sanpada', 'Juinagar', 'Nerul', 'Seawoods', 'Belapur', 'Kharghar', 'Mansarovar', 'Khandeshwar', 'Panvel'
];

// Determine direction based on from and to station positions
function determineDirection(fromStation, toStation) {
    const fromLower = fromStation.toLowerCase();
    const toLower = toStation.toLowerCase();

    // 1. Check Central Line (Most common)
    const fromIdxCentral = centralLineOrder.findIndex(s => s.toLowerCase() === fromLower);
    const toIdxCentral = centralLineOrder.findIndex(s => s.toLowerCase() === toLower);

    if (fromIdxCentral !== -1 && toIdxCentral !== -1) {
        return {
            line: 'Central',
            direction: fromIdxCentral < toIdxCentral ? 'DOWN' : 'UP',
            lineKey: fromIdxCentral < toIdxCentral ? 'centralDown' : 'centralUp'
        };
    }

    // 2. Check Harbour Standard (CSMT - Panvel)
    const fromIdxHarbourStd = harbourStandardOrder.findIndex(s => s.toLowerCase() === fromLower);
    const toIdxHarbourStd = harbourStandardOrder.findIndex(s => s.toLowerCase() === toLower);

    if (fromIdxHarbourStd !== -1 && toIdxHarbourStd !== -1) {
        return {
            line: 'Harbour',
            direction: fromIdxHarbourStd < toIdxHarbourStd ? 'DOWN' : 'UP',
            lineKey: fromIdxHarbourStd < toIdxHarbourStd ? 'harbourDown' : 'harbourUp'
        };
    }

    // 3. Check Harbour Western (CSMT - Goregaon)
    const fromIdxHarbourWest = harbourWesternOrder.findIndex(s => s.toLowerCase() === fromLower);
    const toIdxHarbourWest = harbourWesternOrder.findIndex(s => s.toLowerCase() === toLower);

    if (fromIdxHarbourWest !== -1 && toIdxHarbourWest !== -1) {
        // For Western line, our mock data is in 'harbourWestern'.
        // Direction DOWN is towards Goregaon, UP is towards CSMT
        const isDown = fromIdxHarbourWest < toIdxHarbourWest;
        return {
            line: 'Harbour',
            direction: isDown ? 'DOWN' : 'UP',
            lineKey: 'harbourWestern'
        };
    }

    // 4. Check Trans Harbour Line
    const fromIdxTrans = transHarbourOrder.findIndex(s => s.toLowerCase() === fromLower);
    const toIdxTrans = transHarbourOrder.findIndex(s => s.toLowerCase() === toLower);

    if (fromIdxTrans !== -1 && toIdxTrans !== -1) {
        return {
            line: 'Trans Harbour',
            direction: fromIdxTrans < toIdxTrans ? 'DOWN' : 'UP',
            lineKey: 'transHarbour'
        };
    }

    // 5. Check Western Line
    const fromIdxWestern = westernLineOrder.findIndex(s => s.toLowerCase() === fromLower);
    const toIdxWestern = westernLineOrder.findIndex(s => s.toLowerCase() === toLower);

    if (fromIdxWestern !== -1 && toIdxWestern !== -1) {
        // Western line logic - similar to Central
        // DOWN is towards Virar (higher index), UP is towards Churchgate (lower index)
        const isDown = fromIdxWestern < toIdxWestern;
        return {
            line: 'Western',
            direction: isDown ? 'DOWN' : 'UP',
            lineKey: isDown ? 'westernDown' : 'westernUp'
        };
    }

    // --- Transfer Logic ---

    // Case A: Trans Harbour to Central (e.g., Airoli -> Diva)
    // Interchange at Thane
    if (fromIdxTrans !== -1 && toIdxCentral !== -1) {
        // Check if Thane is the connecting point
        return {
            line: 'Trans Harbour',
            direction: 'UP', // Towards Thane
            lineKey: 'transHarbour',
            interchange: 'Thane',
            transferMsg: `Take train to Thane, then switch to Central Line for ${toStation}`
        };
    }

    // Case B: Central to Trans Harbour (e.g., Kalyan -> Vashi)
    // Interchange at Thane
    if (fromIdxCentral !== -1 && toIdxTrans !== -1) {
        // Go to Thane
        // If coming from Kalyan (High Index) to Thane (Low Index) -> UP
        // If coming from CSMT (Low Index) to Thane (High Index) -> DOWN
        const thaneIdx = centralLineOrder.findIndex(s => s.toLowerCase() === 'thane');
        const direction = fromIdxCentral > thaneIdx ? 'UP' : 'DOWN';

        return {
            line: 'Central',
            direction: direction,
            lineKey: direction === 'UP' ? 'centralUp' : 'centralDown',
            interchange: 'Thane',
            transferMsg: `Take train to Thane, then switch to Trans Harbour Line for ${toStation}`
        };
    }

    // Case C: Central to Western (e.g., Kalyan -> Virar)
    // Interchange at Dadar
    if (fromIdxCentral !== -1 && toIdxWestern !== -1) {
        // Go to Dadar
        const dadarIdx = centralLineOrder.findIndex(s => s.toLowerCase() === 'dadar');
        const direction = fromIdxCentral > dadarIdx ? 'UP' : 'DOWN';

        return {
            line: 'Central',
            direction: direction,
            lineKey: direction === 'UP' ? 'centralUp' : 'centralDown',
            interchange: 'Dadar',
            transferMsg: `Take train to Dadar, then switch to Western Line for ${toStation}`
        };
    }

    // Case D: Western Harbour to Central (e.g., Andheri -> Kalwa)
    // Interchange at Vadala/Kurla
    if (fromIdxHarbourWest !== -1 && toIdxCentral !== -1) {
        // Go to Kurla
        return {
            line: 'Harbour',
            direction: 'UP', // Towards CSMT/Kurla
            lineKey: 'harbourWestern',
            interchange: 'Vadala Road', // Our western trains go to Vadala/CSMT
            transferMsg: `Take train to Vadala/Kurla, then switch to Central Line for ${toStation}`
        };
    }

    // Case E: Trans Harbour to Harbour South (e.g., Airoli -> Chembur)
    // Interchange at Vashi (both lines share Vashi)
    if (fromIdxTrans !== -1 && fromIdxHarbourStd !== -1 === false && toIdxHarbourStd !== -1) {
        // Check if destination is on Harbour Standard (CSMT side like Chembur)
        // Need to go DOWN to Vashi first
        return {
            line: 'Trans Harbour',
            direction: 'DOWN', // Towards Vashi/Panvel
            lineKey: 'transHarbour',
            interchange: 'Vashi',
            transferMsg: `Take train to Vashi, then switch to Harbour Line for ${toStation}`
        };
    }

    // Case F: Trans Harbour to Western (e.g., Airoli -> Andheri)
    // Double Transfer: Thane -> Dadar -> Andheri
    if (fromIdxTrans !== -1 && toIdxWestern !== -1) {
        return {
            line: 'Trans Harbour',
            direction: 'UP', // Towards Thane
            lineKey: 'transHarbour',
            interchange: 'Thane',
            transferMsg: `Take train to Thane, switch to Central Line to Dadar, then Western Line for ${toStation}`
        };
    }

    // Case G: Harbour Standard to Western (e.g., Panvel -> Bandra)
    // Transfer at Vadala then Dadar
    if (fromIdxHarbourStd !== -1 && toIdxWestern !== -1) {
        const isGoingUp = fromIdxHarbourStd > harbourStandardOrder.findIndex(s => s.toLowerCase() === 'vadala road');
        return {
            line: 'Harbour',
            direction: isGoingUp ? 'UP' : 'DOWN',
            lineKey: isGoingUp ? 'harbourUp' : 'harbourDown',
            interchange: 'Vadala Road',
            transferMsg: `Take train to Vadala, switch to Central Line to Dadar, then Western Line for ${toStation}`
        };
    }

    // Case H: Western to Harbour Standard (e.g., Virar -> Chembur)
    // Transfer: Western -> Dadar -> Central -> Kurla -> Harbour
    if (fromIdxWestern !== -1 && toIdxHarbourStd !== -1) {
        const dadarIdxWest = westernLineOrder.findIndex(s => s.toLowerCase() === 'dadar');
        const direction = fromIdxWestern > dadarIdxWest ? 'UP' : 'DOWN';
        return {
            line: 'Western',
            direction: direction,
            lineKey: direction === 'UP' ? 'westernUp' : 'westernDown',
            interchange: 'Dadar',
            transferMsg: `Take train to Dadar, switch to Central Line to Kurla, then Harbour Line for ${toStation}`
        };
    }

    // Case H2: Western to Central (e.g., Virar -> Kalyan)
    // Interchange at Dadar
    if (fromIdxWestern !== -1 && toIdxCentral !== -1) {
        const dadarIdxWest = westernLineOrder.findIndex(s => s.toLowerCase() === 'dadar');
        const direction = fromIdxWestern > dadarIdxWest ? 'UP' : 'DOWN';
        return {
            line: 'Western',
            direction: direction,
            lineKey: direction === 'UP' ? 'westernUp' : 'westernDown',
            interchange: 'Dadar',
            transferMsg: `Take train to Dadar, then switch to Central Line for ${toStation}`
        };
    }

    // Case I: Western to Trans Harbour (e.g., Andheri -> Airoli)
    // Double Transfer: Dadar -> Thane -> Airoli
    if (fromIdxWestern !== -1 && toIdxTrans !== -1) {
        const dadarIdxWest = westernLineOrder.findIndex(s => s.toLowerCase() === 'dadar');
        const direction = fromIdxWestern > dadarIdxWest ? 'UP' : 'DOWN';
        return {
            line: 'Western',
            direction: direction,
            lineKey: direction === 'UP' ? 'westernUp' : 'westernDown',
            interchange: 'Dadar',
            transferMsg: `Take train to Dadar, switch to Central Line to Thane, then Trans Harbour for ${toStation}`
        };
    }

    // Case J: Central to Harbour South (e.g., Ambernath -> Chembur)
    // Interchange at Kurla
    if (fromIdxCentral !== -1 && toIdxHarbourStd !== -1) {
        const kurlaIdx = centralLineOrder.findIndex(s => s.toLowerCase() === 'kurla');
        const direction = fromIdxCentral > kurlaIdx ? 'UP' : 'DOWN';
        return {
            line: 'Central',
            direction: direction,
            lineKey: direction === 'UP' ? 'centralUp' : 'centralDown',
            interchange: 'Kurla',
            transferMsg: `Take train to Kurla, then switch to Harbour Line for ${toStation}`
        };
    }

    // Case K: Harbour South to Central (e.g., Chembur -> Ambernath)
    // Interchange at Kurla
    if (fromIdxHarbourStd !== -1 && toIdxCentral !== -1) {
        const kurlaIdx = harbourStandardOrder.findIndex(s => s.toLowerCase() === 'kurla');
        // Kurla is not on harbourStandardOrder, but route goes via Chunabhatti/Tilak Nagar towards Kurla
        // We need to identify direction based on position relative to Vadala
        const vadalaIdx = harbourStandardOrder.findIndex(s => s.toLowerCase() === 'vadala road');
        const direction = fromIdxHarbourStd > vadalaIdx ? 'UP' : 'DOWN';
        return {
            line: 'Harbour',
            direction: direction,
            lineKey: direction === 'UP' ? 'harbourUp' : 'harbourDown',
            interchange: 'Kurla',
            transferMsg: `Take train towards CSMT/Kurla, then switch to Central Line for ${toStation}`
        };
    }

    // Case L: Central to Harbour Western (e.g., Kalyan -> Kings Circle)
    // Transfer at Dadar to Harbour Western
    if (fromIdxCentral !== -1 && toIdxHarbourWest !== -1) {
        const dadarIdx = centralLineOrder.findIndex(s => s.toLowerCase() === 'dadar');
        const direction = fromIdxCentral > dadarIdx ? 'UP' : 'DOWN';
        return {
            line: 'Central',
            direction: direction,
            lineKey: direction === 'UP' ? 'centralUp' : 'centralDown',
            interchange: 'Dadar',
            transferMsg: `Take train to Dadar, then switch to Harbour (via Bandra) for ${toStation}`
        };
    }

    // Case M: Harbour Standard to Trans Harbour (e.g., Chembur -> Airoli)
    // Transfer at Vashi
    if (fromIdxHarbourStd !== -1 && toIdxTrans !== -1) {
        const vashiIdx = harbourStandardOrder.findIndex(s => s.toLowerCase() === 'vashi');
        const direction = fromIdxHarbourStd < vashiIdx ? 'DOWN' : 'UP';
        return {
            line: 'Harbour',
            direction: direction,
            lineKey: direction === 'DOWN' ? 'harbourDown' : 'harbourUp',
            interchange: 'Vashi',
            transferMsg: `Take train to Vashi, then switch to Trans Harbour Line for ${toStation}`
        };
    }

    // Case N: Western to Harbour Western (e.g., Virar -> Kings Circle)
    // These share stations (Andheri, Bandra etc), need to go via shared station
    if (fromIdxWestern !== -1 && toIdxHarbourWest !== -1) {
        const bandraIdxWest = westernLineOrder.findIndex(s => s.toLowerCase() === 'bandra');
        const direction = fromIdxWestern > bandraIdxWest ? 'UP' : 'DOWN';
        return {
            line: 'Western',
            direction: direction,
            lineKey: direction === 'UP' ? 'westernUp' : 'westernDown',
            interchange: 'Bandra',
            transferMsg: `Take train to Bandra, then switch to Harbour (via Kings Circle) for ${toStation}`
        };
    }

    // Case O: Harbour Western to Western (e.g., Kings Circle -> Virar)
    if (fromIdxHarbourWest !== -1 && toIdxWestern !== -1) {
        const bandraIdx = harbourWesternOrder.findIndex(s => s.toLowerCase() === 'bandra');
        const direction = fromIdxHarbourWest > bandraIdx ? 'DOWN' : 'UP';
        return {
            line: 'Harbour',
            direction: direction,
            lineKey: 'harbourWestern',
            interchange: 'Bandra',
            transferMsg: `Take train to Bandra, then switch to Western Line for ${toStation}`
        };
    }

    // Case P: Harbour Standard to Harbour Western (e.g., Chembur -> Kings Circle)
    // Via CSMT or Vadala
    if (fromIdxHarbourStd !== -1 && toIdxHarbourWest !== -1) {
        return {
            line: 'Harbour',
            direction: 'UP',
            lineKey: 'harbourUp',
            interchange: 'CSMT',
            transferMsg: `Take train to CSMT, then switch to Harbour (via Bandra) for ${toStation}`
        };
    }

    // Case Q: Harbour Western to Harbour Standard (e.g., Kings Circle -> Chembur)
    if (fromIdxHarbourWest !== -1 && toIdxHarbourStd !== -1) {
        return {
            line: 'Harbour',
            direction: 'UP',
            lineKey: 'harbourWestern',
            interchange: 'CSMT',
            transferMsg: `Take train to CSMT, then switch to Harbour (via Panvel) for ${toStation}`
        };
    }

    // Case R: Harbour Western to Trans Harbour (e.g., Kings Circle -> Airoli)
    // Via CSMT -> Vashi -> Trans Harbour
    if (fromIdxHarbourWest !== -1 && toIdxTrans !== -1) {
        return {
            line: 'Harbour',
            direction: 'UP',
            lineKey: 'harbourWestern',
            interchange: 'CSMT',
            transferMsg: `Take train to CSMT, then Harbour to Vashi, then Trans Harbour for ${toStation}`
        };
    }

    // Case S: Trans Harbour to Harbour Western (e.g., Airoli -> Kings Circle)
    // Via Thane -> Dadar -> Harbour Western
    if (fromIdxTrans !== -1 && toIdxHarbourWest !== -1) {
        return {
            line: 'Trans Harbour',
            direction: 'UP',
            lineKey: 'transHarbour',
            interchange: 'Thane',
            transferMsg: `Take train to Thane, then Central to Dadar, then Harbour (via Bandra) for ${toStation}`
        };
    }

    return null;
}

// Get trains for a specific route (from source to destination)
export function getTrainsForRoute(fromStation, toStation, currentTime, count = 6) {
    const directionInfo = determineDirection(fromStation, toStation);

    if (!directionInfo) {
        return { trains: [], direction: null, line: null };
    }

    const { line, direction, lineKey, interchange, transferMsg } = directionInfo;

    // Convert station name to code
    let fromCode = stationNameToCode[fromStation];
    if (!fromCode) {
        fromCode = fromStation.toLowerCase().replace(/\s+/g, '');
    }

    const [hours, minutes] = currentTime.split(':').map(Number);
    const currentMins = hours * 60 + minutes;
    const results = [];

    // Get trains from the appropriate direction
    const trains = trainTimings[lineKey] || [];
    const transTrains = lineKey === 'transHarbour'
        ? trains.filter(t => t.dir === direction)
        : trains;

    transTrains.forEach(train => {
        let depTime = train[fromCode];

        // Check intermediate stations
        const intermediate = intermediateStations[fromCode];
        if (!depTime && intermediate) {
            const isUp = direction === 'UP';
            const dirConfig = isUp ? intermediate.up : intermediate.down;

            if (dirConfig) {
                const refStation = isUp ? dirConfig.before : dirConfig.after;
                const majorStationTime = train[refStation];

                if (majorStationTime) {
                    const [h, m] = majorStationTime.split(':').map(Number);
                    let totalMins;

                    if (isUp) {
                        totalMins = h * 60 + m - dirConfig.offset;
                        if (totalMins < 0) totalMins += 1440;
                    } else {
                        totalMins = h * 60 + m + dirConfig.offset;
                        if (totalMins >= 1440) totalMins -= 1440;
                    }

                    const newH = Math.floor(totalMins / 60);
                    const newM = totalMins % 60;
                    depTime = `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`;
                }
            }
        }

        if (!depTime) return;

        const [h, m] = depTime.split(':').map(Number);
        const trainMins = h * 60 + m;
        let waitMins = trainMins - currentMins;
        if (waitMins < 0) waitMins += 1440; // Next day

        results.push({
            trainNo: train.trainNo,
            type: train.type,
            time: depTime,
            destination: train.dest || (direction === 'UP' ? 'CSMT' : 'Terminal'),
            minutesUntil: waitMins
        });
    });

    return {
        trains: results.sort((a, b) => a.minutesUntil - b.minutesUntil).slice(0, count),
        direction,
        line,
        interchange,
        transferMsg
    };
}

