import {Link} from 'react-router-dom'

export const LinksList = ({links})=>{
    if(!links.length){
        return <p className="center">Ссылок пока нет</p>
    }
    return(
        <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Оригинальная</th>
              <th>Сокрашенная</th>
              <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
         {links.map((link,index)=>{
             return(
            <tr key={link.to + index}>
                <td>{index + 1}</td>
                <td style={{maxWidth:'300px', overflowX: 'scroll'}}>{link.from}</td>
                <td>{link.to}</td>
                <td><Link to={`/detail/${link._id}`}>Открыть</Link> </td>
            </tr>
             )
         })}
          

        </tbody>
      </table>
    )
}