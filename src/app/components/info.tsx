import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';


function Info(){
    return(
        <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl font-bold pl-2' >Get In Touch</h2>
                <p className='font-semibold text-[18px] pt-2 text-white pl-2'>
                    Drop me a line, give me a call, or send me a message by submitting a form.
                </p>
                <div className='flex gap-3 items-center text-white pl-2'  >
                   <Mail size={30}/> abc12@gmail.com
                </div> 
                
                <div className='flex gap-3 items-center text-white pl-2'>
                   <Phone size={30}/> (021) 000-0000
                </div>
             </div>
             <div className='space-y-8'>
                <div className='flex flex-col gap-1 pl-2 pr-2'> 
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border '
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1 pl-2 pr-2' >
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1 pl-2 pr-2' >
                    <label htmlFor="msg">Message</label>
                    <textarea
                     className='h-[40px] bg-transparent border '
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-black text-white p-2 px-8 rounded-xl hover:bg-slate-500' >Send</button>
             </div>
        </div>
      
    </div>
  )
}
export default Info;