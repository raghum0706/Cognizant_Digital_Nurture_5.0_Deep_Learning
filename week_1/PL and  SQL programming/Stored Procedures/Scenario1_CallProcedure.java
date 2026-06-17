import java.sql.*;

public class Scenario1_CallProcedure {

    public static void main(String[] args) {

        try {

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/bankdb",
                "root",
                "Raghu@5678"
            );

            CallableStatement cs = con.prepareCall("{CALL ProcessMonthlyInterest()}");

            cs.execute();

            System.out.println("Monthly Interest Applied Successfully!");

            con.close();

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}