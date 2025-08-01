//ao inves de usar tipo object ou {}, recomenda usar (Record<string, unknown>)
    const objetoA: {
      chaveA:string;
      readonly chaveB:string;//não pode alterar o valor
      chaveC?:string;
      [key:string]:unknown;
    } = {
      chaveA:'valorA',
      chaveB:'valorB',
    }

    objetoA.chaveA = 'outro valor'
    //objetoA.chaveC = 'nova chave' não pode ser criado sem especificar na tipagem
    objetoA.chaveC = 'nova chave'//chaveC?:string;
    objetoA.chaveD = 'nova chave'//[key:string]:unknown;

    console.log(objetoA)
    // { chaveA: 'outro valor', chaveB: 'valorB', chaveC: 'nova chave', chaveD: 'nova chave' }
