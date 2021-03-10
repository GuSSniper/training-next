function Home() {
    return (
    <div>
        <h3>WebPage do GuGu</h3>
        <br>...</br>
        <div>clica ae...</div>
        <br>...</br>
    </div>
    )
}

function click () {
    alert ('Bum!');
}

function butao(){
    return (
        <div>
            <button onclick={click}>BUTÃO</button>
        </div>
    )
}

export default Home