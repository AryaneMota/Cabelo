const {soma, texto, multi} = require('./aula1');

test(
    'testando a função soma', () => {
        expect(soma(1,2)).toBe(3);
    }
)
test(
    'testando função texto', () =>{
    expect(texto("Aryane")).toBe("Bom dia Aryane em que posso te ajudar hoje?")
})
test(
    'testando multiplicação', () => {
        expect(multi(5, 3)).toBe(15)
    }
)