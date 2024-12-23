import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class SeatManagementApp extends Frame {
    public SeatManagementApp() {
        // Set layout first
        setLayout(new BorderLayout());

        // Title Label
        Label titleLabel = new Label("Restaurant Seat Management", Label.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        add(titleLabel, BorderLayout.NORTH);

        // Button to update seat availability
        Button updateSeatButton = new Button("Update Seat Availability");
        updateSeatButton.addActionListener(e -> updateSeatAvailability());
        add(updateSeatButton, BorderLayout.CENTER);

        // Add window closing event
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.out.println("Application closing...");
                dispose(); // Close the window
                System.exit(0); // Terminate the program
            }
        });

        // Frame settings
        setSize(400, 200);
        setVisible(true);
    }

    private void updateSeatAvailability() {
        // JDBC URL, username, and password
        String jdbcURL = "jdbc:mysql:mysql-connector-j-9.1.0.jar//localhost:3306/restaurant_db";
        String username = "root";
        String password = "Siri#2006";

        try (Connection conn = DriverManager.getConnection(jdbcURL, username, password)) {
            String query = "UPDATE Tables SET availability_status = ? WHERE table_id = ?";
            PreparedStatement pst = conn.prepareStatement(query);

            pst.setBoolean(1, true); // Set availability to true (available)
            pst.setInt(2, 1); // Update Table ID 1
            pst.executeUpdate();

            System.out.println("Table availability updated.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        new SeatManagementApp();
    }
}
