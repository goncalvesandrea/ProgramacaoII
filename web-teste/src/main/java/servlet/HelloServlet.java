package servlet;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(
        name = "MyServlet",
        urlPatterns = {"/hello"}
)
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.println(String.format("<h1>Ola Mundo</h1>"));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String nome = req.getParameter("nome");
//        Contato contato = new Contato();
//        contato.setNome("Maycon de Moraes");
//        contato.setTelefone("32657845");
//        contato.setCelular("98651278");
//        contato.insere();
        PrintWriter out = resp.getWriter();
        out.println(String.format("<h1>O nome do usuário é %s </h1>", nome));
    }
}
