import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className='card-front'>
                    <img src={item.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name: </strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname: </strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday: </strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Occupation: </strong> {item.occupation}
                        </li>
                        <li>
                            <strong>Status: </strong> {item.status}
                        </li>
                        <li>
                            <strong>Appeared in seasons: </strong> {
                            item.appearance
                            }
                        </li>

                    </ul>
                </div>

            </div>

        </div>
    )
}

//console.log(this.props.item.appearance)

/* function displayAppearance() {
    let i=0;
    for (i in item.appearance) {
        console.log(item.appearance[i])
    }
} */

export default CharacterItem
