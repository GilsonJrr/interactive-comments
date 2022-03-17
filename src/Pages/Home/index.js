import React, {useState} from 'react';
import './homeStyle.css'
import Cards from './Components/Cards';
import ComentCard from './Components/ComentCard';
import { data } from '../../Data/data';
import Modal from './Components/Modal';

function Home() {

    const [Data, setData] = useState(data)
    const [modal, setModal] = useState(false)

    function HandleModal(){
        setModal(true)
    }

  return (
    <div className='Body'>
        {Data.comments.map((iten)=>{
            return(
                <div className='BodyCards'>
                    <Cards
                        Avatar={iten.user.image.png}
                        Username={iten.user.username}
                        Date={iten.createdAt}
                        Comment={iten.content}
                        Score={iten.score}
                        SetModal={()=>setModal(true)}
                    />
                    {iten.replies.map((replies)=>{
                        return(
                            <div className='BodyCardsReplies'>
                                    <Cards
                                        Avatar={replies.user.image.png}
                                        Username={replies.user.username}
                                        Date={replies.createdAt}
                                        Comment={replies.content}
                                        Score={replies.score}
                                        RepliedTo={replies.replyingTo}
                                    />
                            </div>
                        )
                    })}
                </div>
            )
        })}
        <ComentCard/>

        {modal &&
            <Modal/>
        }

    </div>
  );
}

export default Home;
