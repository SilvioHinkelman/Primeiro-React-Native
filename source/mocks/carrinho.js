import topo from '../../assets/topo.png'
import logoVendedor from '../../assets/logo.png'
import paper from '../../assets/paper.jpg'
import ok from '../../assets/ok.jpg'
import no from '../../assets/no.png'
import tresG from '../../assets/Itens/antena2g3g.png'
import wifii from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import capacitor from '../../assets/Itens/capacitor.jpg'
import mcu from '../../assets/Itens/nodeMcu.png'

const Carrinho = {
        topo: {
                titulo: 'Carrinho',
                imagem: topo
        },
        detalhes: {
                titulo: 'Detalhes do Carrinho',
                tituloProduto: 'Kit IOT',
                descricao: 'Um kit IOT que revoluciona a vida dos estudantes',
                logoVendedor: logoVendedor,
                nomeVendedor: "Nuven's Shopping",
                preco: 'R$ 99,00',
        },
        informacoes: {
                titulo:'Informações Kit IOT',
                intem1: 'MCU',
                intem2: 'Modem',
                intem3: 'Antena WI-FII',
                intem4: 'Capacitor 10UF',
                intem5: 'Antena 3G',
                paper: paper,
                ok: ok,
                no: no,
                tresG: tresG,
                wifii: wifii, 
                modem: modem,
                capacitor: capacitor,
                mcu: mcu
        },
        itens: {
                titulo: "Itens do Carrinho",
                lista: [
                        {
                                nome: "Antena2g/3g",
                                imagem: tresG,
                        },
                        {
                                nome: "Antena WI-FII",
                                imagem: wifii,
                        },
                        {
                                nome: "Modem",
                                imagem: modem,
                        },
                        {
                                nome: "MCU",
                                imagem: mcu,
                        },
                ]
        },
        trabalho: {
                status: "Status do pedido",
                statuspedido: [
                        {
                                id: "Pedido recebido",
                                check: ok,
                        },
                        {
                                id: "Pagamento",
                                check: ok,
                        },
                        {
                                id: "Embalado",
                                check: ok,
                        },
                        {
                                id: "Enviado",
                                check: no,
                        },
                ]
        },
}

export default Carrinho;