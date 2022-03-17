import React, { useState,useEffect } from 'react';
import '../homeStyle.css'

import Plus from '../../../Img/icon-plus.svg'
import Minus from '../../../Img/icon-minus.svg'

import Reply from '../../../Img/icon-reply.svg'
import Delete from '../../../Img/icon-delete.svg'
import Edit from '../../../Img/icon-edit.svg'

import { data } from '../../../Data/data';

function Cards(props) {

    const [score, setScore] = useState (props.Score)
    const [currentUser, setCurrentUser] = useState (false)
    const current = (data.currentUser.username)

    function HandleScorePlus(){
        setScore(score+1)
    }

    function HandleScoreMinus(){
        if(score > 0){
            setScore(score-1)
        }
    }

    useEffect(()=>{
        function HandleCurrent(){
            if(props.Username == current){
                setCurrentUser(true)
            }
        }
    
        HandleCurrent();
    },[])

  return (
    <div className='Card'>
        <div className='Top'>
            <img src={props.Avatar} alt="Avatar"/>
            <p1>{props.Username}</p1>
            {currentUser &&
                <div className='Current'>
                    <p3>you</p3>
                </div> 
                
            }
            <p2>{props.Date}</p2>
        </div>
        <div className='CardBody'>
            <p2>{props.RepliedTo}</p2>
            <p1>{props.Comment}</p1>
        </div>
        <div className='Bottom'>

            <div className='Score'>
                <img src={Plus} alt="Plus" onClick={HandleScorePlus}/>
                <p1>{score}</p1>
                <img src={Minus} alt="Minus" onClick={HandleScoreMinus}/>
            </div>
            
            {currentUser ?
            <div className='DelRepl'>
                
                <div className='Delete' onClick={props.SetModal}>
                    <img src={Delete} alt="Reply"/>
                    <p1>
                        Delete  
                    </p1>
                </div>
                
                <div className='Reply'>
                    <img src={Edit} alt="Reply"/>
                    <p1>
                        Edit
                    </p1>
                </div>
                
            </div>
            :
            <div className='Reply'>
                    <img src={Reply} alt="Reply"/>
                    <p1>
                        Reply
                    </p1>
            </div>
            }
        </div>
      
    </div>
  );
}

export default Cards;
