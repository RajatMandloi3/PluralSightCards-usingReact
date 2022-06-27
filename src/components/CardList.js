import Card from './Card'
export default function CardList(props) {
  return (
    <div>
     {props.PERSON.map(profile=><Card  key={profile.id}  {...profile}/>)   }
    </div>
  )
}



