import { homeData } from './data';
import { NavBar } from './header';
import './home.css';
import journey from './media/journey.png';

export function Home({isOpened, setOpening}) {
    return <main id="home">
        {isOpened && <NavBar isOpened={isOpened} setOpening={setOpening}/>}
        <div className="packer">
            <table className='main'>
                <tbody>
                    <tr>
                        <td id="eye-catcher">
                            <div className="slogan">
                                <h2>Путешествие</h2>
                                <h6>на красную планету</h6>
                            </div>
                            <button id='journey'>
                                <img src={journey} alt='Начать путешествие'/>
                            </button>
                        </td>
                        <td>
                            <table id="benefits">
                                <tbody>
                                    <tr>
                                        <td style={{
                                            backgroundImage: 'linear-gradient(to bottom right, transparent 30%, rgba(255, 255, 255, 0.15))',
                                            borderImage: 'linear-gradient(to bottom right, transparent 30%, rgba(255, 255, 255, 0.4)) 1'
                                            }}>
                                            <p>мы</p>
                                            <h3>{homeData.positionOnMarket}</h3>
                                            <p>на рынке</p>
                                        </td>
                                        <td style={{
                                            backgroundImage: 'linear-gradient(to bottom left, transparent 30%, rgba(255, 255, 255, 0.15))',
                                            borderImage: 'linear-gradient(to bottom left, transparent 30%, rgba(255, 255, 255, 0.4)) 1'
                                        }}>
                                            <p>гарантируем</p>
                                            <h3>{homeData.safetyPercentage}%</h3>
                                            <p>безопасность</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{
                                            backgroundImage: 'linear-gradient(to top right, transparent 30%, rgba(255, 255, 255, 0.15))',
                                            borderImage: 'linear-gradient(to top right, transparent 30%, rgba(255, 255, 255, 0.4)) 1'
                                        }}>
                                            <p>календарик за</p>
                                            <h3>{homeData.calendar}г.</h3>
                                            <p>в подарок</p>
                                        </td>
                                        <td style={{
                                            backgroundImage: 'linear-gradient(to top left, transparent 30%, rgba(255, 255, 255, 0.15))',
                                            borderImage: 'linear-gradient(to top left, transparent 30%, rgba(255, 255, 255, 0.4)) 1'
                                        }}>
                                            <p>путешествие</p>
                                            <h3>597</h3>
                                            <p>дней</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
}