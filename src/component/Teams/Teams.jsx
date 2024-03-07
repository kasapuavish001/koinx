import React from 'react'
import img from '../../assests/images/team.jpeg'
import './teams.scss'
const Teams = () => {
    return (
        <div className='team'>
            <p className="team_title">
                Team
            </p>
            <p className="team_para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero necessitatibus quae sint iusto? Atque molestiae modi nemo culpa repudiandae!
            </p>

            <div className="team_card">
                <div className="team_card_imageblock">
                    <img src={img} alt="team" />
                    <p className="team_name">Elina Williams</p>
                    <p className="team_role">Designation here</p>
                </div>

                <div className="team_card_details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos laboriosam officiis aut fugiat cum in dolores expedita possimus sint! Atque est totam sunt, aperiam mollitia inventore facere veniam temporibus voluptate, quos aut dicta ad sed dolorum enim accusantium. Asperiores expedita magnam quos enim, neque mollitia modi sunt natus nemo!
                    </p>
                </div>
            </div>
            <div className="team_card">
                <div className="team_card_imageblock">
                    <img src={img} alt="team" />
                    <p className="team_name">Elina Williams</p>
                    <p className="team_role">Designation here</p>
                </div>
                <div className="team_card_details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos laboriosam officiis aut fugiat cum in dolores expedita possimus sint! Atque est totam sunt, aperiam mollitia inventore facere veniam temporibus voluptate, quos aut dicta ad sed dolorum enim accusantium. Asperiores expedita magnam quos enim, neque mollitia modi sunt natus nemo!
                    </p>
                </div>
            </div>
            <div className="team_card">
                <div className="team_card_imageblock">
                    <img src={img} alt="team" />
                    <p className="team_name">Elina Williams</p>
                    <p className="team_role">Designation here</p>
                </div>
                <div className="team_card_details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos laboriosam officiis aut fugiat cum in dolores expedita possimus sint! Atque est totam sunt, aperiam mollitia inventore facere veniam temporibus voluptate, quos aut dicta ad sed dolorum enim accusantium. Asperiores expedita magnam quos enim, neque mollitia modi sunt natus nemo!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Teams
