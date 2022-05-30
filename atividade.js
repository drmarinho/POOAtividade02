//Classe Pessoa
class Pessoa{
    constructor(pNome, pEndereco){
        this.Nome = pNome
        this.Endereco = pEndereco
    }
    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}
    get Endereco(){return this.endereco}
    set Endereco(pEndereco){this.endereco = pEndereco}
    toString(){
        return "Nome:" + this.nome + "\nEndereço:" +this.endereco
    }
}

//Classe Pessoa Fisica que esta herdando da classe Pessoa
class PessoaFisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pDatanasc){
        super(pNome, pEndereco)
        this.Cpf = pCpf
        this.DataNasc = pDatanasc
    }
    get Cpf(){return this.cpf}
    set Cpf(pCpf){this.cpf = pCpf}
    get DataNasc(){return this.dataNasc}
    set DataNasc(pDatanasc){this.dataNasc = pDatanasc}
    toString(){
        let retorno = super.toString()
        retorno = retorno + "\nCPF:" + this.cpf + "\nNascimento:" +this.dataNasc
        return retorno
    }
}

//Classe Pessoa Jurídica que esta herdando da classe Pessoa
class PessoaJuridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pRazaoSocial){
        super(pNome, pEndereco)
        this.Cnpj = pCnpj
        this.RazaoSocial = pRazaoSocial
    }
    get Cnpj(){return this.cnpj}
    set Cnpj(pCnpj){this.cnpj = pCnpj}
    get RazaoSocial(){return this.razaoSocial}
    set RazaoSocial(pRazaoSocial){this.razaoSocial = pRazaoSocial}
    toString(){
        let retorno = super.toString()
        retorno = retorno + "\nCNPJ:" + this.cnpj + "\nRazão Social:" +this.razaoSocial
        return retorno
    }
}

//Teste classe Pessoa
var pessoa = new Pessoa("Thiago Marinho", "Rua Riachuelo")
console.log(pessoa.toString())

//Teste da classe Pessoa Fisica 
var pessoaFisica = new PessoaFisica("Thiago Marinho", "Rua Viachuelo", "00000000000", "17/03/1996")
console.log(pessoaFisica.toString())

//Teste da Classe Pessoa Juridica
var pessoaJuridica = new PessoaJuridica("Marinho S/A", "Rua Riachuelo", "00000000000000", "Tecnologia da Informação")
console.log(pessoaJuridica.toString())
