using System.ComponentModel.DataAnnotations;

namespace net_core_backend_api.Models.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public Decimal valorTotal { get; set; }
        public int qtdeItens { get; set; }
        public Decimal valorFrete { get; set; }
    }
}
