import java.sql.*;

public class Scenario2_CallProcedure {

    public static void main(String[] args) {

        try {

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/bankdb",
                "root",
                "Raghu@5678"
            );

            CallableStatement cs = con.prepareCall(
                "{CALL UpdateEmployeeBonus(?, ?)}"
            );

            cs.setString(1, "IT");
            cs.setDouble(2, 10);       

            cs.execute();

            System.out.println("Employee Bonus Updated!");

            con.close();

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}