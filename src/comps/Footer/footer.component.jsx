import '../Footer/footer.styles.scss';
import coinGecko from '../../assets/CoinGecko-WhiteText.svg'

const Footer  = () => {
    return(
        <footer>
            <p>Powered By</p>
            <img src={coinGecko}></img>
        </footer>
    )
}

export default Footer;