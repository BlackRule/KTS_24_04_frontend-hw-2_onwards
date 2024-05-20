http://195.46.171.236:39002/  
https://ecommerce-4e1a5.firebaseapp.com/  
https://ecommerce-not-dns.netlify.app/  
https://api.escuelajs.co/api/v1 Started misbehaving  
And returning `'["https://nectardeco.cl/wp-content/uploads/2022/09/MesaD.jpg"]'` as image URL and `hah2222` as title and returning only 10 products etc. So I found out that it's actually https://fakeapi.platzi.com/ and I am now running it on my own computer with public IP In a Docker container.  
The problem is that it's http not https and thus if front is https:
Mixed Content: The page at 'https://ecommerce-not-dns.netlify.app/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://195.46.171.236:3123/api/v1/categories'. This request has been blocked; the content must be served over HTTPS.
Features
firebase
	 signin
	 signup
	 send password reset email
Product page image slider using react-responsive-carousel