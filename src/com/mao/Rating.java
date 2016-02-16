package com.mao;

import java.beans.PropertyVetoException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.json.parsers.JSONParser;
import com.json.parsers.JsonParserFactory;

/**
 * Servlet implementation class Rating
 */
@WebServlet("/rating")
public class Rating extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Rating() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		JsonParserFactory factory=JsonParserFactory.getInstance();
	    JSONParser parser=factory.newJsonParser();
		Map jsonMap=parser.parseJson(request.getParameter("fkey"));
		Connection conn=null;
		if(jsonMap.get("isGetting")!=null){
			try {
				conn = DataSource.getInstance().getConnection();
				String json=OperateTable.getRating(conn, (String)jsonMap.get("id"));
				System.out.println(json);
				  response.setContentType("application/json;charset=UTF-8"); //- See more at: http://ng-angular-js.blogspot.com/2015/01/reading-data-from-servlet-via-angular.html#sthash.fhIFBxtO.dpuf
				 PrintWriter out = response.getWriter();
				 out.println(json);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (PropertyVetoException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally {
				if (conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			};
			
		}else{
			try {
				conn = DataSource.getInstance().getConnection();
				String sql = "SELECT * FROM diaryRate where id ="+"'"+(String)jsonMap.get("id")+"'";;
				String times=OperateTable.getInfo(conn,sql,"times");	
				int total=Integer.parseInt(times)+1;
				 sql = "UPDATE diaryRate set times="+"'"+total+"'"+"where id="+"'"+(String)jsonMap.get("id")+"'";
				 OperateTable.operation(conn,sql);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (PropertyVetoException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally {
				if (conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			};
			
		}
	}

}
