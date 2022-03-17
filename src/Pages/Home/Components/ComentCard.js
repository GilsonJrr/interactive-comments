import '../homeStyle.css'
import AmyAvatar from '../../../Img/avatars/image-amyrobson.png'

function ComentCard(){
    return(
        <div className='ComentCard'>
            <div className='ComentSection'>
                <textarea placeholder='Add a Comment...'/>
            </div>
            <div className='BottomComent '>
                <img src={AmyAvatar} alt="Avatar"/>
                <div className='Send'>
                    <p1>
                        SEND
                    </p1>
                </div>
            </div>
        </div>
    )
}

export default ComentCard;