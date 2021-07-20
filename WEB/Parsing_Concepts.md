## Parsing

### means
translates documents to a structure the code can use.

### Result of parsing
a tree of nodes (represent the structure of the docuement) => `Parse Tree` or `Syntax Tree`

### conditions
context free grammer(문맥 자유 문법)
: must have **deterministic(결정론적인) grammer**.
즉, 단어/문장 등에 대한 룰이 제대로 정해진 문법(context free grammer)에 의해 작성된 포맷이어야 한다.

ex) 인간의 언어는 context free grammer가 아니기 때문에 기계적으로 파싱할 수 없다.
<br/>

---

## Parser-Lexer combination
![](https://images.velog.io/images/sohyeon00/post/a9ca17bf-8d8f-465d-b628-d36f1ab209cb/image.png)

### consists of ...
	lexical analysis + syntax analysis = Parsing
    
- Lexical analysis => **Lexer**
the process of breaking the input into tokens.
 ✔️ Token: language voca ex) a, b, ㄱ, \, +, ...
 <br/>
- Syntax analysis => **Parser**
the applying of the language syntax rules.


### goals of ...

- Lexer: breaks the input into tokens and delete irrelevant characters(white space공백, link breaks줄 바꿈).
- Parser: constructs the Parse tree by syntax analysis.

### process
파싱 과정은 매우 반복적. 다음 3개의 과정을 반복한다.

1) 파서가 lexer에게 새로운 토큰을 요청함
2) Lexer에게서 받아온 새로운 토큰을 syntax 룰과 맞춰봄
3-1) 룰과 맞으면 토큰에 맞는 노드가 Parse Tree에 추가된다.
3-2) 룰과 맞지 않으면 파서는 토큰을 내부에 저장하고 저장된 토큰과 맞는 규칙이 발견될 때까지 계속 새로운 토큰을 요청한다.

결국 어떠한 규칙과도 성립되지 않는 토큰은 파서가 예외처리한다. 즉, document was not valid and contained syntax errors.

<br/>

## Actually,

Parsing은 Translation을 위한 과정이다.

Translation: Transforming the input document to another format.
ex) Compliation(컴파일)
✔️ Complie: complies source code into machine code.

즉, 파싱 과정을 끝까지 보자면
1. 문서를 파싱해 Parse Tree 생성 
2. Translates Parse Tree into a machine code document.
3. Complier do complies a machine code document.
![](https://images.velog.io/images/sohyeon00/post/02f4641a-9d3e-4e4a-9d3a-64611effea96/image.png)
