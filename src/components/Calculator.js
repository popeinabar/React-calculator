import React,{useState} from 'react'

export default function Calculator() {


    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState('')
    const [thrid, setthrid] = useState('')

    const Calculation=(e)=>{
        setfirst(e)
        setsecond(prev=>`${prev}${e}`)
    }

    const Result=()=>{
        
        setthrid(eval(second));
    }

    const erase=()=>{
        setfirst('')
        setsecond('')
        setthrid('')
    }

    const remove=()=>{
        const rem=second.slice(0,second.length-1);
        setsecond(rem);
        setthrid('')
    }

   

  return (
    <div>
       <h1> Calculator </h1>
       <div className='set'>
       <div className='cal'>
       <div>
                {second}
            </div>
            <div   >
                {thrid}
            </div>
            </div>
            </div>
       <div className='body'>
        
        <div className='main'>
            
            
            <div className='remove'>
            <div id="ac" className='cursor'  onClick={erase} >
                A.C
            </div>
            <div id="del" className='cursor' onClick={remove}>
                Del
            </div>
            </div>
            <div className='grid'>
                <div onClick={()=>Calculation(1)} className='number'>1</div>
                <div onClick={()=>Calculation(2)} className='number'>2</div>
                <div onClick={()=>Calculation(3)} className='number'>3</div>
                <div onClick={()=>Calculation('+')} className='number'>+</div>

                <div onClick={()=>Calculation('4')} className='number'>4</div>
                <div onClick={()=>Calculation('5')} className='number'>5</div>
                <div onClick={()=>Calculation('6')} className='number'>6</div>
                <div onClick={()=>Calculation("-")} className='number'>-</div>

                <div onClick={()=>Calculation('7')} className='number'>7</div>
                <div onClick={()=>Calculation('8')} className='number'>8</div>
                <div onClick={()=>Calculation('9')} className='number'>9</div>
                <div onClick={()=>Calculation("*")} className='number'>*</div>

                <div onClick={()=>Calculation(".")} className='number'>.</div>
                <div onClick={()=>Calculation('0')} className='number'>0</div>
                <div onClick={()=>Calculation("/")} className='number'>/</div>
                <div onClick={()=>Result()} className='number'>=</div>
            </div>
        </div>

       </div>
    </div>
  )
}