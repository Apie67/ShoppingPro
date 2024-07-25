
function Profilepic() {
    const imgUrl = './src/assets/naruto.png';
    const handleClick = (e) => e.target.style.display = 'none'; 

    return(<img onClick={(e) => handleClick(e)} src={imgUrl}></img>)

}
export default Profilepic