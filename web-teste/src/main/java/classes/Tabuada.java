package classes;

public class Tabuada {
	private Integer numeroMaximoTabuada = 10;
	
	public String calcular(Integer numero) {
		StringBuilder sb = new StringBuilder();
		sb.append("------------------------------\n");
		sb.append("Tabudada do " + numero + "\n");
		sb.append("------------------------------\n");
		for(int i =1; i<= this.numeroMaximoTabuada; i++) {
			Integer resultado = i * numero;
			sb.append("    " + i + " X " + numero + " = " + resultado + "\n");
		}
		return sb.toString();
	}

}
