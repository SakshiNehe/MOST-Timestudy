// Mock data for the application
export const mockLines = [
  {
    id: 1,
    name: "Assembly Line A",
    stationCount: 8,
    videosUploaded: 24,
    videosProcessed: 20,
    description: "Main vehicle assembly line for sedan production",
    stations: [
      {
        id: 1,
        number: "S1",
        name: "Frame Assembly",
        videos: [
          { id: 1, name: "frame_assembly_op1.mp4", uploadDate: "2025-12-15", duration: "2:45" },
          { id: 2, name: "frame_assembly_op2.mp4", uploadDate: "2025-12-16", duration: "3:12" },
          { id: 3, name: "frame_assembly_op3.mp4", uploadDate: "2025-12-17", duration: "2:58" }
        ],
        mostData: {
          tmu: 1250,
          cycleTime: "45.0s",
          parameters: {
            A: 320,
            B: 280,
            G: 350,
            P: 300
          },
          operations: [
            { step: "Get frame component", tmu: 280, method: "A6B0G1" },
            { step: "Position on fixture", tmu: 350, method: "A4B3G3P2" },
            { step: "Secure with bolts", tmu: 420, method: "A2B6G2P5" },
            { step: "Verify alignment", tmu: 200, method: "A3B0G1" }
          ]
        }
      },
      {
        id: 2,
        number: "S2",
        name: "Engine Mount",
        videos: [
          { id: 4, name: "engine_mount_v1.mp4", uploadDate: "2025-12-15", duration: "4:20" },
          { id: 5, name: "engine_mount_v2.mp4", uploadDate: "2025-12-16", duration: "4:05" }
        ],
        mostData: {
          tmu: 1680,
          cycleTime: "60.5s",
          parameters: {
            A: 420,
            B: 380,
            G: 450,
            P: 430
          },
          operations: [
            { step: "Lift engine assembly", tmu: 450, method: "A8B6G3" },
            { step: "Align with mounts", tmu: 380, method: "A6B4G2P3" },
            { step: "Secure mounting bolts", tmu: 520, method: "A4B8G4P6" },
            { step: "Connect wiring harness", tmu: 330, method: "A3B5G2P4" }
          ]
        }
      },
      {
        id: 3,
        number: "S3",
        name: "Transmission Install",
        videos: [
          { id: 6, name: "transmission_install.mp4", uploadDate: "2025-12-18", duration: "5:30" },
          { id: 7, name: "transmission_check.mp4", uploadDate: "2025-12-18", duration: "2:15" },
          { id: 8, name: "transmission_final.mp4", uploadDate: "2025-12-19", duration: "3:45" }
        ],
        mostData: {
          tmu: 1920,
          cycleTime: "69.1s",
          parameters: {
            A: 480,
            B: 420,
            G: 520,
            P: 500
          },
          operations: [
            { step: "Position transmission", tmu: 520, method: "A10B8G4" },
            { step: "Align with engine", tmu: 420, method: "A6B6G3P4" },
            { step: "Secure connection", tmu: 580, method: "A5B10G5P7" },
            { step: "Install linkage", tmu: 400, method: "A4B6G3P5" }
          ]
        }
      },
      {
        id: 4,
        number: "S4",
        name: "Suspension Assembly",
        videos: [
          { id: 9, name: "suspension_front.mp4", uploadDate: "2025-12-20", duration: "3:50" },
          { id: 10, name: "suspension_rear.mp4", uploadDate: "2025-12-20", duration: "3:35" }
        ],
        mostData: {
          tmu: 1450,
          cycleTime: "52.2s",
          parameters: {
            A: 360,
            B: 340,
            G: 380,
            P: 370
          },
          operations: [
            { step: "Install front struts", tmu: 380, method: "A7B5G3P4" },
            { step: "Install rear shocks", tmu: 370, method: "A7B5G3P4" },
            { step: "Attach control arms", tmu: 420, method: "A5B7G4P5" },
            { step: "Torque all fasteners", tmu: 280, method: "A3B4G2P6" }
          ]
        }
      },
      {
        id: 5,
        number: "S5",
        name: "Brake System",
        videos: [
          { id: 11, name: "brake_install.mp4", uploadDate: "2025-12-21", duration: "4:10" }
        ],
        mostData: {
          tmu: 1580,
          cycleTime: "56.9s",
          parameters: {
            A: 390,
            B: 360,
            G: 410,
            P: 420
          },
          operations: [
            { step: "Install brake calipers", tmu: 410, method: "A6B6G3P5" },
            { step: "Mount brake rotors", tmu: 380, method: "A5B5G3P4" },
            { step: "Connect brake lines", tmu: 420, method: "A4B7G4P6" },
            { step: "Bleed brake system", tmu: 370, method: "A3B6G3P5" }
          ]
        }
      },
      {
        id: 6,
        number: "S6",
        name: "Electrical Wiring",
        videos: [
          { id: 12, name: "wiring_main.mp4", uploadDate: "2025-12-22", duration: "6:20" },
          { id: 13, name: "wiring_dashboard.mp4", uploadDate: "2025-12-22", duration: "4:45" },
          { id: 14, name: "wiring_test.mp4", uploadDate: "2025-12-23", duration: "2:30" }
        ],
        mostData: {
          tmu: 2150,
          cycleTime: "77.4s",
          parameters: {
            A: 520,
            B: 480,
            G: 580,
            P: 570
          },
          operations: [
            { step: "Route main harness", tmu: 580, method: "A8B10G5P3" },
            { step: "Connect ECU", tmu: 480, method: "A5B6G4P6" },
            { step: "Install dashboard wiring", tmu: 570, method: "A7B8G5P7" },
            { step: "Test all circuits", tmu: 520, method: "A6B7G4P5" }
          ]
        }
      },
      {
        id: 7,
        number: "S7",
        name: "Interior Assembly",
        videos: [
          { id: 15, name: "interior_seats.mp4", uploadDate: "2025-12-24", duration: "5:15" },
          { id: 16, name: "interior_dashboard.mp4", uploadDate: "2025-12-24", duration: "4:50" }
        ],
        mostData: {
          tmu: 1850,
          cycleTime: "66.6s",
          parameters: {
            A: 460,
            B: 420,
            G: 490,
            P: 480
          },
          operations: [
            { step: "Install front seats", tmu: 490, method: "A8B7G4P5" },
            { step: "Install rear seats", tmu: 480, method: "A8B7G4P5" },
            { step: "Mount dashboard", tmu: 520, method: "A9B8G5P6" },
            { step: "Install trim panels", tmu: 360, method: "A5B6G3P4" }
          ]
        }
      },
      {
        id: 8,
        number: "S8",
        name: "Final Quality Check",
        videos: [
          { id: 17, name: "quality_exterior.mp4", uploadDate: "2025-12-25", duration: "3:40" },
          { id: 18, name: "quality_interior.mp4", uploadDate: "2025-12-25", duration: "3:25" },
          { id: 19, name: "quality_functional.mp4", uploadDate: "2025-12-26", duration: "5:10" }
        ],
        mostData: {
          tmu: 1680,
          cycleTime: "60.5s",
          parameters: {
            A: 420,
            B: 380,
            G: 440,
            P: 440
          },
          operations: [
            { step: "Visual inspection", tmu: 440, method: "A10B0G2" },
            { step: "Functional tests", tmu: 520, method: "A8B6G4P5" },
            { step: "Measurement checks", tmu: 380, method: "A6B5G3P4" },
            { step: "Documentation", tmu: 340, method: "A5B4G2P3" }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    name: "Assembly Line B",
    stationCount: 6,
    videosUploaded: 18,
    videosProcessed: 15,
    description: "SUV assembly line for premium models",
    stations: [
      {
        id: 9,
        number: "S1",
        name: "Chassis Welding",
        videos: [
          { id: 20, name: "chassis_weld_1.mp4", uploadDate: "2025-12-10", duration: "3:30" },
          { id: 21, name: "chassis_weld_2.mp4", uploadDate: "2025-12-11", duration: "3:45" }
        ],
        mostData: {
          tmu: 1420,
          cycleTime: "51.1s",
          parameters: { A: 350, B: 320, G: 380, P: 370 },
          operations: [
            { step: "Position chassis parts", tmu: 380, method: "A7B6G3" },
            { step: "Tack weld joints", tmu: 420, method: "A5B7G4P6" },
            { step: "Complete weld seams", tmu: 620, method: "A6B10G5P8" }
          ]
        }
      },
      {
        id: 10,
        number: "S2",
        name: "Body Panel Install",
        videos: [
          { id: 22, name: "body_panels.mp4", uploadDate: "2025-12-12", duration: "4:55" }
        ],
        mostData: {
          tmu: 1750,
          cycleTime: "63.0s",
          parameters: { A: 440, B: 400, G: 460, P: 450 },
          operations: [
            { step: "Install door panels", tmu: 460, method: "A8B7G4P5" },
            { step: "Install hood", tmu: 420, method: "A7B6G3P4" },
            { step: "Install trunk lid", tmu: 400, method: "A7B6G3P4" },
            { step: "Align all panels", tmu: 470, method: "A6B8G4P6" }
          ]
        }
      },
      {
        id: 11,
        number: "S3",
        name: "Paint Preparation",
        videos: [
          { id: 23, name: "paint_prep.mp4", uploadDate: "2025-12-13", duration: "5:20" },
          { id: 24, name: "paint_prime.mp4", uploadDate: "2025-12-13", duration: "4:10" }
        ],
        mostData: {
          tmu: 1980,
          cycleTime: "71.3s",
          parameters: { A: 490, B: 450, G: 520, P: 520 },
          operations: [
            { step: "Surface cleaning", tmu: 520, method: "A10B8G4" },
            { step: "Sanding preparation", tmu: 580, method: "A8B10G5P6" },
            { step: "Apply primer coat", tmu: 620, method: "A7B9G5P8" },
            { step: "Inspect surface", tmu: 260, method: "A6B0G2" }
          ]
        }
      },
      {
        id: 12,
        number: "S4",
        name: "Powertrain Install",
        videos: [
          { id: 25, name: "powertrain_v1.mp4", uploadDate: "2025-12-14", duration: "6:40" }
        ],
        mostData: {
          tmu: 2280,
          cycleTime: "82.1s",
          parameters: { A: 570, B: 520, G: 610, P: 580 },
          operations: [
            { step: "Lower engine/trans assembly", tmu: 610, method: "A10B10G5" },
            { step: "Align mounting points", tmu: 520, method: "A8B8G4P5" },
            { step: "Secure all mounts", tmu: 650, method: "A6B12G6P8" },
            { step: "Connect drivetrain", tmu: 500, method: "A7B8G4P6" }
          ]
        }
      },
      {
        id: 13,
        number: "S5",
        name: "Wheel & Tire Assembly",
        videos: [
          { id: 26, name: "wheels_install.mp4", uploadDate: "2025-12-15", duration: "3:15" },
          { id: 27, name: "wheels_torque.mp4", uploadDate: "2025-12-15", duration: "2:20" }
        ],
        mostData: {
          tmu: 1320,
          cycleTime: "47.5s",
          parameters: { A: 330, B: 300, G: 350, P: 340 },
          operations: [
            { step: "Mount front wheels", tmu: 350, method: "A6B5G3P4" },
            { step: "Mount rear wheels", tmu: 350, method: "A6B5G3P4" },
            { step: "Torque all lug nuts", tmu: 340, method: "A4B6G3P7" },
            { step: "Verify tire pressure", tmu: 280, method: "A3B4G2P3" }
          ]
        }
      },
      {
        id: 14,
        number: "S6",
        name: "Final Testing",
        videos: [
          { id: 28, name: "test_drive.mp4", uploadDate: "2025-12-16", duration: "8:30" },
          { id: 29, name: "test_diagnostics.mp4", uploadDate: "2025-12-16", duration: "4:15" },
          { id: 30, name: "test_final_check.mp4", uploadDate: "2025-12-17", duration: "3:50" }
        ],
        mostData: {
          tmu: 2450,
          cycleTime: "88.2s",
          parameters: { A: 610, B: 560, G: 650, P: 630 },
          operations: [
            { step: "Connect diagnostics", tmu: 420, method: "A5B6G3P5" },
            { step: "Run system tests", tmu: 850, method: "A10B12G6P8" },
            { step: "Road test simulation", tmu: 920, method: "A12B14G7P10" },
            { step: "Final documentation", tmu: 260, method: "A4B3G2P2" }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    name: "Assembly Line C",
    stationCount: 5,
    videosUploaded: 12,
    videosProcessed: 12,
    description: "Electric vehicle assembly line",
    stations: [
      {
        id: 15,
        number: "S1",
        name: "Battery Pack Install",
        videos: [
          { id: 31, name: "battery_install.mp4", uploadDate: "2025-12-05", duration: "7:20" }
        ],
        mostData: {
          tmu: 2580,
          cycleTime: "92.9s",
          parameters: { A: 640, B: 590, G: 680, P: 670 },
          operations: [
            { step: "Position battery pack", tmu: 680, method: "A12B10G5" },
            { step: "Align connectors", tmu: 590, method: "A8B8G4P6" },
            { step: "Secure mounting bolts", tmu: 720, method: "A7B12G6P9" },
            { step: "Connect power cables", tmu: 590, method: "A6B9G5P8" }
          ]
        }
      },
      {
        id: 16,
        number: "S2",
        name: "Electric Motor Install",
        videos: [
          { id: 32, name: "motor_front.mp4", uploadDate: "2025-12-06", duration: "5:45" },
          { id: 33, name: "motor_rear.mp4", uploadDate: "2025-12-06", duration: "5:30" }
        ],
        mostData: {
          tmu: 2120,
          cycleTime: "76.3s",
          parameters: { A: 530, B: 480, G: 560, P: 550 },
          operations: [
            { step: "Install front motor", tmu: 560, method: "A9B8G4P6" },
            { step: "Install rear motor", tmu: 560, method: "A9B8G4P6" },
            { step: "Connect inverters", tmu: 520, method: "A7B9G5P7" },
            { step: "Verify alignment", tmu: 480, method: "A6B7G3P5" }
          ]
        }
      },
      {
        id: 17,
        number: "S3",
        name: "Cooling System",
        videos: [
          { id: 34, name: "cooling_battery.mp4", uploadDate: "2025-12-07", duration: "4:35" },
          { id: 35, name: "cooling_motor.mp4", uploadDate: "2025-12-07", duration: "4:20" }
        ],
        mostData: {
          tmu: 1780,
          cycleTime: "64.1s",
          parameters: { A: 445, B: 405, G: 470, P: 460 },
          operations: [
            { step: "Install coolant lines", tmu: 470, method: "A8B7G4P6" },
            { step: "Mount heat exchangers", tmu: 450, method: "A7B7G4P5" },
            { step: "Connect pumps", tmu: 420, method: "A6B6G3P5" },
            { step: "Fill and test system", tmu: 440, method: "A5B8G4P6" }
          ]
        }
      },
      {
        id: 18,
        number: "S4",
        name: "Charging System",
        videos: [
          { id: 36, name: "charging_port.mp4", uploadDate: "2025-12-08", duration: "3:50" },
          { id: 37, name: "charging_onboard.mp4", uploadDate: "2025-12-08", duration: "4:10" }
        ],
        mostData: {
          tmu: 1620,
          cycleTime: "58.3s",
          parameters: { A: 405, B: 370, G: 430, P: 415 },
          operations: [
            { step: "Install charge port", tmu: 430, method: "A7B6G3P5" },
            { step: "Mount onboard charger", tmu: 420, method: "A6B7G4P5" },
            { step: "Connect DC fast charge", tmu: 415, method: "A5B7G4P6" },
            { step: "Test charging circuits", tmu: 355, method: "A4B5G3P4" }
          ]
        }
      },
      {
        id: 19,
        number: "S5",
        name: "Software & Calibration",
        videos: [
          { id: 38, name: "software_flash.mp4", uploadDate: "2025-12-09", duration: "6:15" },
          { id: 39, name: "calibration_bms.mp4", uploadDate: "2025-12-09", duration: "5:40" },
          { id: 40, name: "calibration_final.mp4", uploadDate: "2025-12-10", duration: "4:25" }
        ],
        mostData: {
          tmu: 2350,
          cycleTime: "84.6s",
          parameters: { A: 585, B: 540, G: 625, P: 600 },
          operations: [
            { step: "Flash vehicle software", tmu: 625, method: "A8B10G5P7" },
            { step: "Calibrate BMS", tmu: 600, method: "A7B9G5P8" },
            { step: "Configure ADAS", tmu: 580, method: "A7B9G5P7" },
            { step: "Final system check", tmu: 545, method: "A6B8G4P6" }
          ]
        }
      }
    ]
  }
];

export const mockUser = {
  name: "Rajesh Kumar",
  employeeId: "TM-2024-1547",
  email: "rajesh.kumar@tatamotors.com",
  role: "Manufacturing Engineer"
};
