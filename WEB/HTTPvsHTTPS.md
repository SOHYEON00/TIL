 ## HTTP vs HTTPS

 > HTTP와 HTTPS의 통신 방식의 차이에 대해 알아보자.
결론 : 가장 큰 차이는 **보안**이다.



#### HTTP (HyperText Tranfer Protocol)

- 웹 상에서 정보를 주고 받을 수 있는 통신규약이다.
  주로 HTML문서를 주고 받을 때 사용한다.
  TCP, UDP 사용하며 80번 포트를 사용한다.


#### HTTPS (HyperText Transfer Protocol over Secure Socket Layer)

- 기본적으로 HTTP에서 Secure Socket Layer가 추가된 것이다. 통신의 인증과 암호화를 위해 개발되었다.
  SSL 프로토콜 위에서 HTTPS 프로토콜이 동작한다. (이름에서도 알 수 있음)
  SSL이나 TLS 프로토콜을 통해 세션 데이터를 암호화한다. 
  TCP/IP 사용하며 442번 포트를 사용한다.

- 무조건 보안에 안전한 것은 아니고 웹 브라우저에서의 구현 정확도와 서버, 지원하는 암호화 알고리즘에 따라 보안수준이 다르다.
