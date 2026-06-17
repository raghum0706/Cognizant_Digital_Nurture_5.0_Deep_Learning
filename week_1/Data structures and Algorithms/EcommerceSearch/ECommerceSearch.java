public class ECommerceSearch {

    public static Product linearSearch(Product[] products, int targetId) {

        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }

        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            }

            if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Headphones", "Accessories"),
            new Product(104, "Keyboard", "Accessories"),
            new Product(105, "Mouse", "Accessories")
        };

        int searchId = 104;

        Product linearResult = linearSearch(products, searchId);

        if (linearResult != null) {
            System.out.println("Linear Search Result:");
            System.out.println(linearResult);
        } else {
            System.out.println("Product Not Found");
        }

        Product binaryResult = binarySearch(products, searchId);

        if (binaryResult != null) {
            System.out.println("\nBinary Search Result:");
            System.out.println(binaryResult);
        } else {
            System.out.println("Product Not Found");
        }
    }
}