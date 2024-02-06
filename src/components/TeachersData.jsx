const weekTime = Math.floor(Math.random(56) * 10 + 1) * 0.5;
const totalTime = weekTime * Math.floor(Math.random(30) * 10 + 1);

export const DummyTeachers = [
  {
  teacher_id:'1',
	name: '老師1號',
  email: 'user1@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
  teaching_style: '一個活潑熱情的好老師。',
  courses:[
  {
  class_id:'1',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
  reserveDays: {
        Mon: true,
        Tue: false,
        Wed: true,
        Thu: false,
        Fri: true,
        Sat: false,
        Sun: true,
      },
  },
  ]
},
  {
  teacher_id:'2',
	name: '老師2號',
  email: 'user2@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
  teaching_style: '一個活潑熱情的好老師。',
   courses:[
  {
  class_id:'1',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
    reserveDays: {
        Mon: true,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: true,
        Sat: true,
        Sun: true,
      },
},
]
},
  {
  teacher_id:'3',
	name: '老師3號',
  email: 'user3@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
   teaching_style: '一個活潑熱情的好老師。',
   courses:[
  {
  class_id:'1',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
   reserveDays: {
        Mon: true,
        Tue: true,
        Wed: false,
        Thu: false,
        Fri: true,
        Sat: true,
        Sun: true,
      },
},
]
},
  {
  teacher_id:'4',
	name: '老師4號',
  email: 'user4@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
   teaching_style: '一個活潑熱情的好老師。',
   courses:[
  {
  class_id:'4',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
    reserveDays: {
        Mon: false,
        Tue: false,
        Wed: true,
        Thu: false,
        Fri: true,
        Sat: true,
        Sun: false,
      },
},
]
},
  {
 teacher_id:'5',
	name: '老師5號',
  email: 'user5@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
   teaching_style: '一個活潑熱情的好老師。',
   courses:[
  {
  class_id:'5',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
      reserveDays: {
        Mon: false,
        Tue: false,
        Wed: true,
        Thu: false,
        Fri: true,
        Sat: true,
        Sun: false,
      },
},
]
},
  {
  teacher_id:'6',
	name: '老師6號',
  email: 'user6@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
   teaching_style: '一個活潑熱情的好老師。',
   courses:[
  {
  class_id:'6',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
      reserveDays: {
        Mon: false,
        Tue: false,
        Wed: true,
        Thu: false,
        Fri: true,
        Sat: false,
        Sun: false,
      },
},
],
},

 {
  teacher_id:'7',
	name: '老師7號',
  email: 'user7@example.com',
  password:'a1234567890',
  nation:'taiwan',
  is_teacher: true,
  avatar: 'https://illustcenter.com/wp-content/uploads/2022/09/sdesign_00165-508x381.png',
  info: '一個懂得學習和理解學生技能的人，一個懂得學習和了解教育的人，一個懂得教育和教育的學生的判性思考和實際問題解決能力。',
  total_lesson_time: totalTime,
  week_lesson_time: weekTime,
  created_at: new Date(),
  updated_at: new Date(),
  rating:Math.floor(Math.random(56) * 10 + 1) * 0.5,
   teaching_style: '一個活潑熱情的好老師。',
   courses:[
  {
  class_id:'7',
	name: 'Math',
  info: '可怕的數學',
  style:'困難的',
  link:'https://youtube.com',
  time:'30',
  avatar:'https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-super-cute-cartoon-vector-bear-png-image_6504049.png',
  total_score: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  score_count: Math.floor(Math.random(56) * 10 + 1) * 0.5,
  created_at: new Date(),
  updated_at: new Date(),
        reserveDays: {
        Mon: true,
        Tue: true,
        Wed: true,
        Thu: false,
        Fri: false,
        Sat: true,
        Sun: false,
      },
},
]
}

];