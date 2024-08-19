var qoute=[
    {
        qoute:  "“Be yourself; everyone else is already taken.”",
        Auther:"― Oscar Wilde",
    }
    ,
    {
        qoute:  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        Auther:"― Marilyn Monroe",
    }
    ,   {
        qoute:  "“So many books, so little time.”",
        Auther:"― Frank Zappa",
    }
    ,
    {
        qoute:  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        Auther:"― Albert Einstein",
    }
    ,{
        qoute:  "“A room without books is like a body without a soul.”",
        Auther:"― Marcus Tullius Cicero",
    }
    ,{
        qoute:  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        Auther:"― Bernard M. Baruch",
    }
    ,{
        qoute:  "You’ve gotta dance like there’s nobody watching, Love like you’ll never be hurt, Sing like there’s nobody listening, And live like it’s heaven on earth.",
        Auther:"―― William W. Purkey",
    }
    ,{
        qoute:  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        Auther:"― Dr. Seuss",
    }
    ,{
        qoute:  "“You only live once, but if you do it right, once is enough.”",
        Auther:"― Mae West",
    }
    ,{
        qoute:  "“Be the change that you wish to see in the world.”",
        Auther:"― Mahatma Gandhi",
    }
    ,
]

function getQoutes(){
    num=Math.floor(Math.random()*qoute.length)
    document.getElementById("quote").innerHTML=qoute[num].qoute
    document.getElementById("auther").innerHTML=qoute[num].Auther
}