const sistema = require ('./sistema');


describe('Teste de verificarMaiorIdade',() => {
    test('Deve testar as idades',() => {
            expect(sistema.verificarMaioridade(18)).toBe(true);
            expect(sistema.verificarMaioridade(21)).toBe(true);
            expect(sistema.verificarMaioridade(15)).toBe(false);
        });
})

describe('Teste de Imc',() => {
    test('Deve testar altura e peso',() => {
            expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
        });
})
describe('Formatar nome',() => {
    test('nome',() => {
            expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
           
        });
})
describe('par',() => {
    test('verificando',() => {
            expect(sistema.ehPar(2)).toBe(true);
            expect(sistema.ehPar(1)).toBe(false);
            expect(sistema.ehPar(0)).toBe(true);
           
        });
})
describe('clima',() => {
    test('verificando',() => {
            expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
            expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
            expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
           
        });
})
describe('hobby',() => {
    test('Verifique se o array aumenta de tamanho e se contém o novo hobby',() => {
            expect(sistema.adicionarHobby(['futebol', 'leitura'], 'natação')).toEqual(['futebol', 'leitura', 'natação']);
           
           
        });
})
describe('dividir',() => {
    test('verificar se o sistema dividi corretamente',() => {
            expect(sistema.dividir(10, 2)).toBe(5);
            expect(() => sistema.dividir(10, 0).toThrow('divisão por 0 não permitida'));
           
           
        });
})


describe('criarAluno', () => {
    test('Verificar se o sistema cria um aluno corretamente', () => {
            expect(sistema.criarAluno('João', 'Matemática')).toEqual({nome: 'João', curso: 'Matemática', ativo: true });
        });
})

describe('aplicarDesconto', () => {
    test('Verificar se o sistema aplica desconto corretamente', () => {
            expect(sistema.aplicarDesconto(100, 10)).toBe(90);
            expect(sistema.aplicarDesconto(100, 0)).toBe(100);
        });
})
describe('validarTamanhoSenha', () => {
    test('Deve retornar true para senhas com 8 ou mais caracteres', () => {
            expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
            expect(sistema.validarTamanhoSenha('1234')).toBe(false);
        });
})


