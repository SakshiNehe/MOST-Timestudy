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
  },
  {
    id: 4,
    name: "Assembly Line D",
    stationCount: 7,
    videosUploaded: 21,
    videosProcessed: 18,
    description: "Commercial vehicle assembly line",
    stations: [
      {
        id: 20,
        number: "S1",
        name: "Heavy Chassis Assembly",
        videos: [
          { id: 41, name: "heavy_chassis_1.mp4", uploadDate: "2025-12-01", duration: "5:45" },
          { id: 42, name: "heavy_chassis_2.mp4", uploadDate: "2025-12-02", duration: "6:10" }
        ],
        mostData: {
          tmu: 2850,
          cycleTime: "102.6s",
          parameters: { A: 710, B: 650, G: 750, P: 730 },
          operations: [
            { step: "Position heavy frame", tmu: 750, method: "A14B12G6" },
            { step: "Install cross members", tmu: 680, method: "A10B14G7P8" },
            { step: "Weld structural joints", tmu: 920, method: "A8B16G8P12" },
            { step: "Inspect welds", tmu: 500, method: "A8B0G3" }
          ]
        }
      },
      {
        id: 21,
        number: "S2",
        name: "Cab Installation",
        videos: [
          { id: 43, name: "cab_install.mp4", uploadDate: "2025-12-03", duration: "7:25" }
        ],
        mostData: {
          tmu: 3120,
          cycleTime: "112.3s",
          parameters: { A: 780, B: 720, G: 820, P: 800 },
          operations: [
            { step: "Lift cab assembly", tmu: 820, method: "A15B14G7" },
            { step: "Position on chassis", tmu: 720, method: "A12B12G6P8" },
            { step: "Secure mounting bolts", tmu: 980, method: "A10B18G9P14" },
            { step: "Connect cab wiring", tmu: 600, method: "A8B10G5P8" }
          ]
        }
      },
      {
        id: 22,
        number: "S3",
        name: "Cargo Bed Assembly",
        videos: [],
        mostData: {
          tmu: 2450,
          cycleTime: "88.2s",
          parameters: { A: 610, B: 560, G: 650, P: 630 },
          operations: [
            { step: "Install bed frame", tmu: 650, method: "A12B10G5P7" },
            { step: "Mount bed panels", tmu: 620, method: "A10B11G6P8" },
            { step: "Install tailgate", tmu: 580, method: "A9B9G5P6" },
            { step: "Secure all fasteners", tmu: 600, method: "A8B12G6P9" }
          ]
        }
      },
      {
        id: 23,
        number: "S4",
        name: "Heavy Duty Suspension",
        videos: [
          { id: 44, name: "suspension_front.mp4", uploadDate: "2025-12-04", duration: "6:30" },
          { id: 45, name: "suspension_rear.mp4", uploadDate: "2025-12-04", duration: "7:15" }
        ],
        mostData: {
          tmu: 2680,
          cycleTime: "96.5s",
          parameters: { A: 670, B: 620, G: 710, P: 680 },
          operations: [
            { step: "Install leaf springs", tmu: 710, method: "A11B12G6P8" },
            { step: "Mount shock absorbers", tmu: 650, method: "A10B10G5P7" },
            { step: "Install axles", tmu: 740, method: "A12B13G7P9" },
            { step: "Torque all connections", tmu: 580, method: "A8B10G5P10" }
          ]
        }
      },
      {
        id: 24,
        number: "S5",
        name: "Diesel Engine Install",
        videos: [
          { id: 46, name: "diesel_engine.mp4", uploadDate: "2025-12-05", duration: "8:40" }
        ],
        mostData: {
          tmu: 3450,
          cycleTime: "124.2s",
          parameters: { A: 860, B: 800, G: 920, P: 870 },
          operations: [
            { step: "Lower diesel engine", tmu: 920, method: "A16B16G8" },
            { step: "Align engine mounts", tmu: 800, method: "A14B14G7P9" },
            { step: "Secure all mounts", tmu: 1050, method: "A12B20G10P15" },
            { step: "Connect fuel system", tmu: 680, method: "A10B12G6P10" }
          ]
        }
      },
      {
        id: 25,
        number: "S6",
        name: "Hydraulic Systems",
        videos: [
          { id: 47, name: "hydraulics_install.mp4", uploadDate: "2025-12-06", duration: "5:50" },
          { id: 48, name: "hydraulics_test.mp4", uploadDate: "2025-12-06", duration: "4:30" }
        ],
        mostData: {
          tmu: 2280,
          cycleTime: "82.1s",
          parameters: { A: 570, B: 520, G: 610, P: 580 },
          operations: [
            { step: "Install hydraulic pump", tmu: 610, method: "A10B10G5P7" },
            { step: "Route hydraulic lines", tmu: 650, method: "A9B12G6P8" },
            { step: "Connect cylinders", tmu: 580, method: "A8B10G5P8" },
            { step: "Test system pressure", tmu: 440, method: "A6B8G4P6" }
          ]
        }
      },
      {
        id: 26,
        number: "S7",
        name: "Commercial QC",
        videos: [
          { id: 49, name: "qc_structural.mp4", uploadDate: "2025-12-07", duration: "6:20" },
          { id: 50, name: "qc_functional.mp4", uploadDate: "2025-12-07", duration: "7:45" }
        ],
        mostData: {
          tmu: 2950,
          cycleTime: "106.2s",
          parameters: { A: 735, B: 680, G: 780, P: 755 },
          operations: [
            { step: "Structural inspection", tmu: 780, method: "A14B0G4" },
            { step: "Load capacity test", tmu: 920, method: "A12B16G8P10" },
            { step: "Safety system check", tmu: 680, method: "A10B12G6P8" },
            { step: "Final certification", tmu: 570, method: "A8B10G5P7" }
          ]
        }
      }
    ]
  },
  {
    id: 5,
    name: "Assembly Line E",
    stationCount: 6,
    videosUploaded: 16,
    videosProcessed: 14,
    description: "Luxury sedan assembly line",
    stations: [
      {
        id: 27,
        number: "S1",
        name: "Premium Body Shell",
        videos: [
          { id: 51, name: "body_shell_1.mp4", uploadDate: "2025-11-28", duration: "4:55" }
        ],
        mostData: {
          tmu: 1980,
          cycleTime: "71.3s",
          parameters: { A: 495, B: 455, G: 525, P: 505 },
          operations: [
            { step: "Precision weld body panels", tmu: 525, method: "A9B10G5P7" },
            { step: "Install acoustic insulation", tmu: 480, method: "A8B8G4P6" },
            { step: "Apply sound deadening", tmu: 505, method: "A7B9G5P7" },
            { step: "Quality check seams", tmu: 470, method: "A7B8G4P5" }
          ]
        }
      },
      {
        id: 28,
        number: "S2",
        name: "Premium Paint",
        videos: [
          { id: 52, name: "paint_base.mp4", uploadDate: "2025-11-29", duration: "6:40" },
          { id: 53, name: "paint_clear.mp4", uploadDate: "2025-11-29", duration: "5:20" }
        ],
        mostData: {
          tmu: 2650,
          cycleTime: "95.4s",
          parameters: { A: 660, B: 610, G: 700, P: 680 },
          operations: [
            { step: "Apply base coat", tmu: 700, method: "A10B12G6P9" },
            { step: "Apply metallic layer", tmu: 680, method: "A9B11G6P9" },
            { step: "Apply clear coat", tmu: 710, method: "A10B12G6P9" },
            { step: "UV cure finish", tmu: 560, method: "A8B10G5P7" }
          ]
        }
      },
      {
        id: 29,
        number: "S3",
        name: "Luxury Interior",
        videos: [
          { id: 54, name: "interior_leather.mp4", uploadDate: "2025-11-30", duration: "7:30" },
          { id: 55, name: "interior_wood.mp4", uploadDate: "2025-11-30", duration: "5:45" }
        ],
        mostData: {
          tmu: 3280,
          cycleTime: "118.1s",
          parameters: { A: 820, B: 760, G: 870, P: 830 },
          operations: [
            { step: "Install leather seats", tmu: 870, method: "A14B14G7P9" },
            { step: "Install wood trim", tmu: 760, method: "A12B12G6P8" },
            { step: "Install premium carpet", tmu: 820, method: "A13B13G7P8" },
            { step: "Install ambient lighting", tmu: 830, method: "A12B14G7P10" }
          ]
        }
      },
      {
        id: 30,
        number: "S4",
        name: "Advanced Electronics",
        videos: [],
        mostData: {
          tmu: 2850,
          cycleTime: "102.6s",
          parameters: { A: 710, B: 660, G: 750, P: 730 },
          operations: [
            { step: "Install infotainment system", tmu: 750, method: "A11B12G6P9" },
            { step: "Install premium audio", tmu: 720, method: "A10B12G6P9" },
            { step: "Install driver assists", tmu: 730, method: "A11B13G7P10" },
            { step: "Calibrate all systems", tmu: 650, method: "A9B11G6P8" }
          ]
        }
      },
      {
        id: 31,
        number: "S5",
        name: "Performance Tuning",
        videos: [
          { id: 56, name: "tuning_engine.mp4", uploadDate: "2025-12-01", duration: "8:15" },
          { id: 57, name: "tuning_suspension.mp4", uploadDate: "2025-12-01", duration: "6:50" }
        ],
        mostData: {
          tmu: 3150,
          cycleTime: "113.4s",
          parameters: { A: 785, B: 730, G: 830, P: 805 },
          operations: [
            { step: "Engine ECU tuning", tmu: 830, method: "A12B14G7P10" },
            { step: "Suspension calibration", tmu: 780, method: "A11B13G7P9" },
            { step: "Transmission programming", tmu: 805, method: "A12B13G7P10" },
            { step: "Performance validation", tmu: 735, method: "A10B12G6P8" }
          ]
        }
      },
      {
        id: 32,
        number: "S6",
        name: "Luxury QC",
        videos: [
          { id: 58, name: "qc_luxury_1.mp4", uploadDate: "2025-12-02", duration: "9:20" },
          { id: 59, name: "qc_luxury_2.mp4", uploadDate: "2025-12-02", duration: "7:35" }
        ],
        mostData: {
          tmu: 3450,
          cycleTime: "124.2s",
          parameters: { A: 860, B: 800, G: 920, P: 880 },
          operations: [
            { step: "White glove inspection", tmu: 920, method: "A16B0G5" },
            { step: "Road test evaluation", tmu: 1100, method: "A15B18G9P12" },
            { step: "Fit and finish check", tmu: 880, method: "A14B14G7P10" },
            { step: "Final detailing", tmu: 550, method: "A8B10G5P7" }
          ]
        }
      }
    ]
  },
  {
    id: 6,
    name: "Assembly Line F",
    stationCount: 4,
    videosUploaded: 10,
    videosProcessed: 10,
    description: "Compact car assembly line",
    stations: [
      {
        id: 33,
        number: "S1",
        name: "Compact Frame",
        videos: [
          { id: 60, name: "compact_frame.mp4", uploadDate: "2025-11-25", duration: "3:20" }
        ],
        mostData: {
          tmu: 1180,
          cycleTime: "42.5s",
          parameters: { A: 295, B: 270, G: 315, P: 300 },
          operations: [
            { step: "Assemble frame structure", tmu: 315, method: "A6B5G3P4" },
            { step: "Weld main joints", tmu: 380, method: "A5B7G4P5" },
            { step: "Install floor pan", tmu: 300, method: "A5B6G3P4" },
            { step: "Verify dimensions", tmu: 185, method: "A4B0G2" }
          ]
        }
      },
      {
        id: 34,
        number: "S2",
        name: "Economy Powertrain",
        videos: [
          { id: 61, name: "economy_engine.mp4", uploadDate: "2025-11-26", duration: "4:35" },
          { id: 62, name: "economy_trans.mp4", uploadDate: "2025-11-26", duration: "3:50" }
        ],
        mostData: {
          tmu: 1520,
          cycleTime: "54.7s",
          parameters: { A: 380, B: 350, G: 405, P: 385 },
          operations: [
            { step: "Install 3-cylinder engine", tmu: 405, method: "A7B7G4P5" },
            { step: "Connect transmission", tmu: 385, method: "A6B7G4P5" },
            { step: "Install exhaust system", tmu: 370, method: "A6B6G3P5" },
            { step: "Connect fuel lines", tmu: 360, method: "A5B7G4P5" }
          ]
        }
      },
      {
        id: 35,
        number: "S3",
        name: "Basic Interior",
        videos: [
          { id: 63, name: "basic_interior.mp4", uploadDate: "2025-11-27", duration: "4:15" }
        ],
        mostData: {
          tmu: 1380,
          cycleTime: "49.7s",
          parameters: { A: 345, B: 320, G: 365, P: 350 },
          operations: [
            { step: "Install fabric seats", tmu: 365, method: "A6B6G3P4" },
            { step: "Install basic dashboard", tmu: 380, method: "A7B7G4P5" },
            { step: "Install door panels", tmu: 335, method: "A5B6G3P4" },
            { step: "Install floor mats", tmu: 300, method: "A4B5G3P3" }
          ]
        }
      },
      {
        id: 36,
        number: "S4",
        name: "Final Assembly",
        videos: [
          { id: 64, name: "final_compact_1.mp4", uploadDate: "2025-11-28", duration: "5:40" },
          { id: 65, name: "final_compact_2.mp4", uploadDate: "2025-11-28", duration: "4:25" }
        ],
        mostData: {
          tmu: 1650,
          cycleTime: "59.4s",
          parameters: { A: 410, B: 380, G: 440, P: 420 },
          operations: [
            { step: "Install wheels and tires", tmu: 440, method: "A7B7G4P5" },
            { step: "Install bumpers", tmu: 400, method: "A6B7G4P5" },
            { step: "Install lights", tmu: 390, method: "A6B6G3P5" },
            { step: "Final inspection", tmu: 420, method: "A8B6G4P5" }
          ]
        }
      }
    ]
  },
  {
    id: 7,
    name: "Assembly Line G",
    stationCount: 9,
    videosUploaded: 27,
    videosProcessed: 24,
    description: "Hybrid vehicle assembly line",
    stations: [
      {
        id: 37,
        number: "S1",
        name: "Hybrid Platform",
        videos: [
          { id: 66, name: "hybrid_platform.mp4", uploadDate: "2025-12-10", duration: "4:50" }
        ],
        mostData: {
          tmu: 1850,
          cycleTime: "66.6s",
          parameters: { A: 460, B: 425, G: 490, P: 475 },
          operations: [
            { step: "Install reinforced frame", tmu: 490, method: "A8B8G4P6" },
            { step: "Install battery tray", tmu: 475, method: "A8B7G4P6" },
            { step: "Install motor mounts", tmu: 445, method: "A7B7G4P5" },
            { step: "Verify clearances", tmu: 440, method: "A7B6G3P5" }
          ]
        }
      },
      {
        id: 38,
        number: "S2",
        name: "ICE Engine Install",
        videos: [
          { id: 67, name: "ice_engine.mp4", uploadDate: "2025-12-11", duration: "5:30" },
          { id: 68, name: "ice_connect.mp4", uploadDate: "2025-12-11", duration: "4:45" }
        ],
        mostData: {
          tmu: 1920,
          cycleTime: "69.1s",
          parameters: { A: 480, B: 440, G: 510, P: 490 },
          operations: [
            { step: "Install gasoline engine", tmu: 510, method: "A9B8G4P6" },
            { step: "Connect to hybrid system", tmu: 490, method: "A8B9G5P7" },
            { step: "Install cooling system", tmu: 460, method: "A7B8G4P6" },
            { step: "Connect exhaust", tmu: 460, method: "A7B7G4P6" }
          ]
        }
      },
      {
        id: 39,
        number: "S3",
        name: "Electric Motor",
        videos: [
          { id: 69, name: "e_motor_install.mp4", uploadDate: "2025-12-12", duration: "5:15" }
        ],
        mostData: {
          tmu: 1780,
          cycleTime: "64.1s",
          parameters: { A: 445, B: 410, G: 475, P: 450 },
          operations: [
            { step: "Install electric motor", tmu: 475, method: "A8B8G4P6" },
            { step: "Connect to transmission", tmu: 450, method: "A7B8G4P6" },
            { step: "Install power inverter", tmu: 435, method: "A7B7G4P5" },
            { step: "Connect high voltage cables", tmu: 420, method: "A6B7G4P6" }
          ]
        }
      },
      {
        id: 40,
        number: "S4",
        name: "Hybrid Battery",
        videos: [
          { id: 70, name: "hybrid_battery.mp4", uploadDate: "2025-12-13", duration: "6:20" },
          { id: 71, name: "battery_connect.mp4", uploadDate: "2025-12-13", duration: "4:50" }
        ],
        mostData: {
          tmu: 2180,
          cycleTime: "78.5s",
          parameters: { A: 545, B: 500, G: 580, P: 555 },
          operations: [
            { step: "Install battery pack", tmu: 580, method: "A10B9G5P7" },
            { step: "Connect battery cables", tmu: 555, method: "A9B10G5P8" },
            { step: "Install BMS", tmu: 525, method: "A8B9G5P7" },
            { step: "Test battery system", tmu: 520, method: "A8B8G4P7" }
          ]
        }
      },
      {
        id: 41,
        number: "S5",
        name: "Regenerative Braking",
        videos: [],
        mostData: {
          tmu: 1680,
          cycleTime: "60.5s",
          parameters: { A: 420, B: 385, G: 445, P: 430 },
          operations: [
            { step: "Install regen brake system", tmu: 445, method: "A7B7G4P6" },
            { step: "Connect brake controllers", tmu: 430, method: "A7B8G4P6" },
            { step: "Install brake sensors", tmu: 405, method: "A6B7G4P5" },
            { step: "Calibrate regen system", tmu: 400, method: "A6B6G3P6" }
          ]
        }
      },
      {
        id: 42,
        number: "S6",
        name: "Hybrid Control Unit",
        videos: [
          { id: 72, name: "hcu_install.mp4", uploadDate: "2025-12-14", duration: "5:35" },
          { id: 73, name: "hcu_program.mp4", uploadDate: "2025-12-14", duration: "6:45" }
        ],
        mostData: {
          tmu: 2350,
          cycleTime: "84.6s",
          parameters: { A: 585, B: 540, G: 625, P: 600 },
          operations: [
            { step: "Install HCU module", tmu: 625, method: "A9B10G5P8" },
            { step: "Connect all sensors", tmu: 600, method: "A9B9G5P8" },
            { step: "Program hybrid logic", tmu: 720, method: "A8B12G6P10" },
            { step: "Test mode switching", tmu: 405, method: "A6B7G4P5" }
          ]
        }
      },
      {
        id: 43,
        number: "S7",
        name: "Hybrid Transmission",
        videos: [
          { id: 74, name: "hybrid_trans.mp4", uploadDate: "2025-12-15", duration: "5:50" }
        ],
        mostData: {
          tmu: 2050,
          cycleTime: "73.8s",
          parameters: { A: 510, B: 470, G: 545, P: 525 },
          operations: [
            { step: "Install CVT transmission", tmu: 545, method: "A9B9G5P7" },
            { step: "Connect power split device", tmu: 525, method: "A8B10G5P8" },
            { step: "Install transmission cooler", tmu: 490, method: "A8B8G4P6" },
            { step: "Fill transmission fluid", tmu: 490, method: "A7B8G4P7" }
          ]
        }
      },
      {
        id: 44,
        number: "S8",
        name: "Energy Display",
        videos: [
          { id: 75, name: "energy_display.mp4", uploadDate: "2025-12-16", duration: "4:30" },
          { id: 76, name: "display_calibrate.mp4", uploadDate: "2025-12-16", duration: "3:45" }
        ],
        mostData: {
          tmu: 1580,
          cycleTime: "56.9s",
          parameters: { A: 395, B: 365, G: 420, P: 400 },
          operations: [
            { step: "Install energy monitor", tmu: 420, method: "A7B7G4P5" },
            { step: "Install hybrid display", tmu: 400, method: "A6B7G4P5" },
            { step: "Connect data bus", tmu: 380, method: "A6B6G3P5" },
            { step: "Calibrate displays", tmu: 380, method: "A6B6G3P5" }
          ]
        }
      },
      {
        id: 45,
        number: "S9",
        name: "Hybrid Testing",
        videos: [
          { id: 77, name: "hybrid_test_1.mp4", uploadDate: "2025-12-17", duration: "7:50" },
          { id: 78, name: "hybrid_test_2.mp4", uploadDate: "2025-12-17", duration: "8:20" },
          { id: 79, name: "hybrid_final.mp4", uploadDate: "2025-12-18", duration: "6:15" }
        ],
        mostData: {
          tmu: 2850,
          cycleTime: "102.6s",
          parameters: { A: 710, B: 660, G: 755, P: 725 },
          operations: [
            { step: "Test EV mode", tmu: 755, method: "A11B12G6P9" },
            { step: "Test hybrid mode", tmu: 725, method: "A10B12G6P9" },
            { step: "Test regenerative braking", tmu: 680, method: "A10B11G6P8" },
            { step: "Fuel economy validation", tmu: 690, method: "A10B11G6P8" }
          ]
        }
      }
    ]
  },
  {
    id: 8,
    name: "Assembly Line H",
    stationCount: 10,
    videosUploaded: 30,
    videosProcessed: 28,
    description: "Heavy truck assembly line",
    stations: [
      {
        id: 46,
        number: "S1",
        name: "Truck Frame Welding",
        videos: [
          { id: 80, name: "truck_frame_1.mp4", uploadDate: "2025-12-01", duration: "6:40" },
          { id: 81, name: "truck_frame_2.mp4", uploadDate: "2025-12-01", duration: "7:15" }
        ],
        mostData: {
          tmu: 3280,
          cycleTime: "118.1s",
          parameters: { A: 820, B: 760, G: 870, P: 840 },
          operations: [
            { step: "Position main rails", tmu: 870, method: "A15B14G7" },
            { step: "Weld cross members", tmu: 840, method: "A14B16G8P10" },
            { step: "Install reinforcements", tmu: 810, method: "A13B15G8P10" },
            { step: "Quality weld inspection", tmu: 760, method: "A12B0G4" }
          ]
        }
      },
      {
        id: 47,
        number: "S2",
        name: "Heavy Duty Axles",
        videos: [
          { id: 82, name: "axle_front.mp4", uploadDate: "2025-12-02", duration: "5:55" },
          { id: 83, name: "axle_rear.mp4", uploadDate: "2025-12-02", duration: "6:30" }
        ],
        mostData: {
          tmu: 2950,
          cycleTime: "106.2s",
          parameters: { A: 735, B: 680, G: 785, P: 750 },
          operations: [
            { step: "Install front axle", tmu: 785, method: "A13B13G7P9" },
            { step: "Install rear axles", tmu: 750, method: "A12B14G7P9" },
            { step: "Install differential", tmu: 720, method: "A11B13G7P9" },
            { step: "Connect driveshaft", tmu: 695, method: "A11B12G6P8" }
          ]
        }
      },
      {
        id: 48,
        number: "S3",
        name: "Air Brake System",
        videos: [
          { id: 84, name: "air_brake.mp4", uploadDate: "2025-12-03", duration: "7:20" }
        ],
        mostData: {
          tmu: 2680,
          cycleTime: "96.5s",
          parameters: { A: 670, B: 620, G: 710, P: 680 },
          operations: [
            { step: "Install air compressor", tmu: 710, method: "A11B11G6P8" },
            { step: "Route air lines", tmu: 680, method: "A10B12G6P9" },
            { step: "Install brake chambers", tmu: 660, method: "A10B11G6P8" },
            { step: "Test air pressure", tmu: 630, method: "A9B10G5P8" }
          ]
        }
      },
      {
        id: 49,
        number: "S4",
        name: "Diesel Powertrain",
        videos: [
          { id: 85, name: "diesel_heavy.mp4", uploadDate: "2025-12-04", duration: "9:15" },
          { id: 86, name: "diesel_turbo.mp4", uploadDate: "2025-12-04", duration: "5:40" }
        ],
        mostData: {
          tmu: 3850,
          cycleTime: "138.6s",
          parameters: { A: 960, B: 890, G: 1020, P: 980 },
          operations: [
            { step: "Install heavy diesel engine", tmu: 1020, method: "A18B18G9" },
            { step: "Install turbocharger", tmu: 890, method: "A15B16G8P10" },
            { step: "Connect transmission", tmu: 980, method: "A16B18G9P12" },
            { step: "Install exhaust system", tmu: 960, method: "A15B17G9P11" }
          ]
        }
      },
      {
        id: 50,
        number: "S5",
        name: "Truck Cab Assembly",
        videos: [
          { id: 87, name: "cab_sleeper.mp4", uploadDate: "2025-12-05", duration: "8:30" }
        ],
        mostData: {
          tmu: 3450,
          cycleTime: "124.2s",
          parameters: { A: 860, B: 800, G: 920, P: 880 },
          operations: [
            { step: "Install sleeper cab", tmu: 920, method: "A16B16G8P10" },
            { step: "Install driver seat", tmu: 800, method: "A13B14G7P9" },
            { step: "Install dashboard", tmu: 880, method: "A14B15G8P10" },
            { step: "Install HVAC system", tmu: 850, method: "A13B15G8P10" }
          ]
        }
      },
      {
        id: 51,
        number: "S6",
        name: "Hydraulic Lift",
        videos: [],
        mostData: {
          tmu: 2580,
          cycleTime: "92.9s",
          parameters: { A: 645, B: 595, G: 685, P: 655 },
          operations: [
            { step: "Install hydraulic pump", tmu: 685, method: "A11B11G6P8" },
            { step: "Install lift cylinders", tmu: 655, method: "A10B12G6P9" },
            { step: "Route hydraulic lines", tmu: 620, method: "A10B11G6P8" },
            { step: "Test lift operation", tmu: 620, method: "A9B11G6P8" }
          ]
        }
      },
      {
        id: 52,
        number: "S7",
        name: "Cargo Box Install",
        videos: [
          { id: 88, name: "cargo_box.mp4", uploadDate: "2025-12-06", duration: "7:45" },
          { id: 89, name: "cargo_secure.mp4", uploadDate: "2025-12-06", duration: "5:20" }
        ],
        mostData: {
          tmu: 3120,
          cycleTime: "112.3s",
          parameters: { A: 780, B: 720, G: 830, P: 790 },
          operations: [
            { step: "Position cargo box", tmu: 830, method: "A14B14G7P9" },
            { step: "Secure to frame", tmu: 790, method: "A13B15G8P11" },
            { step: "Install tailgate", tmu: 750, method: "A12B13G7P9" },
            { step: "Install side panels", tmu: 750, method: "A12B13G7P9" }
          ]
        }
      },
      {
        id: 53,
        number: "S8",
        name: "Commercial Wiring",
        videos: [
          { id: 90, name: "wiring_truck.mp4", uploadDate: "2025-12-07", duration: "8:50" },
          { id: 91, name: "wiring_lights.mp4", uploadDate: "2025-12-07", duration: "6:15" }
        ],
        mostData: {
          tmu: 2850,
          cycleTime: "102.6s",
          parameters: { A: 710, B: 660, G: 755, P: 725 },
          operations: [
            { step: "Route main harness", tmu: 755, method: "A12B13G7P9" },
            { step: "Install marker lights", tmu: 725, method: "A11B12G6P9" },
            { step: "Install work lights", tmu: 695, method: "A11B12G6P8" },
            { step: "Test all circuits", tmu: 675, method: "A10B11G6P8" }
          ]
        }
      },
      {
        id: 54,
        number: "S9",
        name: "Fleet Electronics",
        videos: [
          { id: 92, name: "fleet_gps.mp4", uploadDate: "2025-12-08", duration: "5:30" },
          { id: 93, name: "fleet_telematics.mp4", uploadDate: "2025-12-08", duration: "6:45" }
        ],
        mostData: {
          tmu: 2280,
          cycleTime: "82.1s",
          parameters: { A: 570, B: 525, G: 605, P: 580 },
          operations: [
            { step: "Install GPS system", tmu: 605, method: "A9B10G5P8" },
            { step: "Install telematics", tmu: 580, method: "A9B9G5P8" },
            { step: "Install dash camera", tmu: 555, method: "A8B9G5P7" },
            { step: "Configure fleet software", tmu: 540, method: "A8B9G5P7" }
          ]
        }
      },
      {
        id: 55,
        number: "S10",
        name: "Heavy Duty Testing",
        videos: [
          { id: 94, name: "test_load.mp4", uploadDate: "2025-12-09", duration: "10:20" },
          { id: 95, name: "test_brake.mp4", uploadDate: "2025-12-09", duration: "8:45" },
          { id: 96, name: "test_final.mp4", uploadDate: "2025-12-10", duration: "9:15" }
        ],
        mostData: {
          tmu: 3850,
          cycleTime: "138.6s",
          parameters: { A: 960, B: 890, G: 1030, P: 990 },
          operations: [
            { step: "Load capacity test", tmu: 1030, method: "A16B18G9P12" },
            { step: "Brake performance test", tmu: 990, method: "A15B17G9P12" },
            { step: "Road test simulation", tmu: 940, method: "A15B16G8P11" },
            { step: "Final certification", tmu: 890, method: "A14B15G8P10" }
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
