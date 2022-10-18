package servlet;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import classes.Tabuada;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(
        name = "TabuadaServelet",
        urlPatterns = {"/tabuada"}
)

public class TabuadaServelet extends HttpServlet{
	

	@Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		Tabuada tabuada = new Tabuada();
				for(int i=1; i<=10; i++) {
					out.println(tabuada.calcular(i));
				}
	}
}