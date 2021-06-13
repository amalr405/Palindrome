import React , {useState,useEffect} from 'react';
import './Palindrome.css'

const Palindrome = () => {
  const [name,setname] = useState('');
  const [checkresult,setcheckresult] = useState('');
  
  useEffect(()=>{
    document.getElementById('check').addEventListener('click',palchecker)
  })

  const setnamer = () => {
    setname(()=>document.getElementById('input').value)
  }

  const palchecker = (e) => {
    if(document.getElementById('input').value.match(/\s+/)){
      setcheckresult(()=>'Please enter input')
    }else{
    var s = [],checker = true;
    var str = document.getElementById('input').value;
    str = str.split(' ')
    s = (str.join('')).toLowerCase();
    s =s.match(/[A-Za-z0-9]+/g)
    s = s.join('')
     for(var j = 0 ; j < s.length/2 ; j++)
      {
         if(s[j]===s[s.length-1-j] && checker === true)
         {
          setname(document.getElementById('input').value)
         } else {
           checker = false
         }
      }
      if(checker === true){
        setcheckresult(()=>`${name} is Palindrome`)
      }else {
       setcheckresult(()=>`${name} is not Palindrome`)
      }
    }
  }

  return (
    <div id='main-div'>
    <header id='header'>Palindrome</header>
    <input type='text' id='input' onChange={setnamer}></input>
    <button id='check'>Check</button>
    <br></br>
    <span >{checkresult}</span>
    <br></br>
    <br></br>
    <hr></hr>
    <div id='intro'>
    <p>A <strong>palindrome</strong> is a word, number, phrase, or other sequence of characters which reads the same backward as forward.<br></br>
    A palindrome was found as a graffito at Herculaneum, a city buried by ash in 79 CE. This palindrome, called the Sator Square, consists of a sentence written in Latin: "Sator Arepo Tenet Opera Rotas"</p>
    <div id='img-div'>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sator_Square_at_Opp%C3%A8de.jpg/220px-Sator_Square_at_Opp%C3%A8de.jpg' alt='first-palindrome'/><br></br>
    </div>
    <p id='lastp'>Some well-known English palindromes are, "Able was I ere I saw Elba", "A man, a plan, a canal – Panama", "Madam, I'm Adam", "Doc, note: I dissent. A fast never prevents a fatness. I diet on cod", "Mr. Owl ate my metal worm", "Do geese see God?", "Was it a car or a cat I saw?", "Murder for a jar of red rum", "Go hang a salami, I'm a lasagna hog", "T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet." and "Never odd or even".</p></div>
    <footer><a rel='noreferrer' href='https://en.wikipedia.org/wiki/Palindrome' target='_blank'>For more information...</a></footer>
    </div>
  )
}

export default Palindrome