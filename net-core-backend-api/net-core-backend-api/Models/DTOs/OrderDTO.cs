namespace net_core_backend_api.Models.DTOs
{
    public class OrderDTO
    {
        public Decimal valorTotal { get; set; }
        public int qtdeItens { get; set; }
        public Decimal valorFrete { get; set; }
    }
}
