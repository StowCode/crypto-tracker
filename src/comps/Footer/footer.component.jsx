import '../Footer/footer.styles.scss';
import coinGecko from '../../assets/CoinGecko-WhiteText.svg'

const Footer  = () => {
    return(
        <footer>
            <div id='footer'>
                <p>Powered By</p>
                <img src={coinGecko}></img>
            </div>
        </footer>
    )
}

export default Footer;