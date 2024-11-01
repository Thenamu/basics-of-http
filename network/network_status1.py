import psutil, time

def get_network_packet_info():
    # 네트워크 인터페이스별로 패킷 정보를 가져옴
    net_io = psutil.net_io_counters(pernic=True)
    
    for interface, stats in net_io.items(): # status :해당 인터페이스의 패킷 및 바이트 통계를 담고 있는 객체 # 전송된 패킷 수, 수신된 패킷 수, 전송된 바이트 수, 수신된 바이트 수 등의 정보가 포함
        print(f"네트워크 인터페이스: {interface}")
        print(f"  전송된 패킷 수: {stats.packets_sent}")
        print(f"  수신된 패킷 수: {stats.packets_recv}")
        print(f"  전송된 바이트 수: {stats.bytes_sent}")
        print(f"  수신된 바이트 수: {stats.bytes_recv}")
        print("-" * 40)

if __name__ == "__main__":
    while True:
        print("현재 네트워크 패킷 정보:")
        get_network_packet_info()
        print("다음 확인까지 5초 대기 중...")
        time.sleep(5)