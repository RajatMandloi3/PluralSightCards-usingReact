import Card from './Card'


const profileImg=`https://random.imagecdn.app/500/150`

export default function CardList(props) {

  return (
    <div>
     {props.PERSON.map(profile=><Card img={profileImg} key={profile.id}  {...profile}/>)   }
    </div>
  )
}



