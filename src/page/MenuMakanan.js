import React, { Component } from "react"
import ListMakanan from "../ListData/ListMakanan"

class MenuMakanan extends Component {
    constructor() {
        super()
        this.state = {
            pesan: "",
            jumlah: 0,
            tampil: false
        }
        this.pilihPesanan = this.pilihPesanan.bind(this)
        this.batal = this.batal.bind(this)
        this.nasiPadang = this.nasiPadang.bind(this)
        this.soto = this.soto.bind(this)
        this.sate = this.sate.bind(this)
        this.kucing = this.kucing.bind(this)
        this.uduk = this.uduk.bind(this)
        
    }

    pilihPesanan(value, e) {
        this.setState({[value] : e.target.value, tampil: true})
    }

    nasiPadang() {
        this.setState({
            pesan: "Nasi Padang",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    nasiPadang() {
        this.setState({
            pesan: "Nasi Padang",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    sate() {
        this.setState({
            pesan: "Sate",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    soto() {
        this.setState({
            pesan: "Soto Ayam Lamongan",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    uduk() {
        this.setState({
            pesan: "Nasi Uduk",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    kucing() {
        this.setState({
            pesan: "Nasi kucing",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }

    batal() {
        this.setState({
            pesan: "",
            jumlah: 0,
            tampil: false
        })
    }
    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                                <center>
                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.kucing}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                    <br />
                    
                    <input type={Text} placeholder="Masukan Pesanan Anda" onChange={(e) => this.pilihPesanan("pesan", e)} />
                    <input type={Text} placeholder="Masukan Jumlah Anda" onChange={(e) => this.pilihPesanan("jumlah", e)} />
                    <button onClick={this.batal}>Batalkan Semua Pesanan</button>

                    {this.state.tampil === true ? (
                        <>
                            <h3>Pesanan Anda : {this.state.pesan}</h3>
                            <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
                        </>
                    ) : (
                            <>
                                <center>Anda Belum Memesan</center>
                            </>
                    )}
                    <h3>Pesanan Anda : {this.state.pesan}</h3>
                </table>

            </div>
        )
    }
}

export default MenuMakanan