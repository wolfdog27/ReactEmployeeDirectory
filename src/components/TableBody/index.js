import React from "react"

function TableBody(props){
    return(<tbody>
        <th><img src={props.src} alt={props.name}></img></th>
    <td>{props.name.first} {props.name.last}</td>
    <td>{props.number}</td>
    <td>{props.email}</td>
    </tbody>)
}

export default TableBody