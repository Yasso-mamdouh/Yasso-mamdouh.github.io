var qoutes= [
    {
        qoute : "To know how much there is to know is the beginning of learning to live",
        person: "Dorothy West",
        title: "Novalist",
        image: "./images/dorothy west - Novalist.jpg"
    },
    {
        qoute : "Life is like riding a bicycle. To keep your balance you must keep moving",
        person: "Albert Einstein",
        title: "theoretical physicist",
        image: "./images/Albert Einstein.jpeg"
    },
    {
        qoute : "I’m a greater believer in luck, and I find the harder I work the more I have of it",
        person: "Thomas Jefferson",
        title: "Third president of the United States",
        image: "./images/Tohmas Jifferson.jpeg"
    },
    {
        qoute : "When I believe in something, I’m like a dog with a bone",
        person: "Melissa McCarthy",
        title: "American Actress",
        image: "./images/Melissa McCarthy_.jpg"
    },
    /* {
        qoute : "Work until your bank account looks like a phone number",
        person: "Unknown",
        title: "LOL",
        images: "./images/emoji\ dark\ gray.jpg"
    } */
    ,
    {
        qoute : "You can get everything in life you want if you will just help enough other people get what they want",
        person: "Zig Ziglar",
        title: "American author, salesman, and motivational speaker",
        image: "./images/Zig Ziglar.jpeg"
    },
    {
        qoute : "The most difficult thing is the decision to act, the rest is merely tenacity",
        person: "Amelia Earhar",
        title: "American aviation pioneer and writer",
        image: "./images/Amelia Earhart.jpeg"
    },

    {
        qoute : "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
        person: "Helen Keller",
        title: "American author",
        image: "./images/Helen Keller.jpeg"
    },
    {
        qoute : "The elevator to success is out of order. You’ll have to use the stairs, one step at a time",
        person: "Joe Girard",
        title: "American salesman",
        image: "./images/Joe Girard.jpeg"
    },
    {
        qoute : "If you really want to do something, you'll find a way. If you don't, you'll find an excuse",
        person: "Jim Rohn",
        title: "American entrepreneur",
        image: "./images/Jim Rohn.jpeg"
    },
    {
        qoute: "Be sure you put your feet in the right place, then stand firm",
        person: "Abraham Lincoln",
        title: "American Lowyer",
        image: "./images/Abraham Lincoln.jpeg"

    },
    {
        qoute: "Education is the most powerful weapon which you can use to change the world",
        person: "Nelson Mandela",
        title: "Former President of South Africa",
        image: "./images/Nelson Mandela.jpeg"
    }
]


var qouteContent = document.querySelector('#person_qoute')
var qoutePersonName = document.querySelector('#person_name')
var qouteTitle = document.querySelector('#person_title')
var qoutePersonPhoto = document.querySelector('.photo img')
var newQouteBtn = document.querySelector('button')

console.log(qoutePersonPhoto)
/* console.log(qouteContent)
console.log(qoutePersonName)
console.log(qouteTitle)

console.log(newQouteBtn) */

    console.log(qoutes.length)
    

    newQouteBtn.addEventListener('click', ()=>{
        let randQoute = Math.floor(Math.random() * qoutes.length)
        console.log(randQoute)
        qouteContent.innerText = qoutes[randQoute].qoute
        qoutePersonName.innerText = qoutes[randQoute].person
        qouteTitle.innerText = qoutes[randQoute].title
        qoutePersonPhoto.setAttribute('src', `${qoutes[randQoute].image}`)
        qoutePersonPhoto.setAttribute('alt', `${qoute[randQoute].person}`)
    
    })