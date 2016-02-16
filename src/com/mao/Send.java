package com.mao;

import java.io.IOException;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.json.parsers.JSONParser;
import com.json.parsers.JsonParserFactory;


/**
 * Servlet implementation class Send
 */
@WebServlet("/send")
public class Send extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Send() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//	}

	/**
	 * @see HttfpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		JsonParserFactory factory=JsonParserFactory.getInstance();
	    JSONParser parser=factory.newJsonParser();
		Map jsonMap=parser.parseJson(request.getParameter("fkey"));
		//String email=(String)jsonMap.get("email");
		String email=(String)jsonMap.get("email");
		String name=(String)jsonMap.get("name");
		String subject=(String)jsonMap.get("subject");
		String content=(String)jsonMap.get("message");
		System.out.println(email);
		System.out.println(subject);
		System.out.println(content);
	
			try {
				SendMail.sendmail("jedny091@gmail.com", subject, content);
			} catch (AddressException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			content="Dear "+(String)jsonMap.get("name")+":\n\n"+"Thanks for taking time to contact me! I will reply to you as soon as I can. I am looking farward to speaking with you soon. \n\n\nSincerely,\n\n\nMAO MAO";
			try {
				SendMail.sendmail(email, "Re: "+subject, content);
			} catch (AddressException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

}
