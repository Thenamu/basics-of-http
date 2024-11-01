import psutil

def get_network_packet_info():
    # 네트워크 인터페이스별로 패킷 및 추가 정보를 가져옴
    net_io = psutil.net_io_counters(pernic=True)
    net_if_addrs = psutil.net_if_addrs()  # 인터페이스 주소 정보
    net_if_stats = psutil.net_if_stats()  # 인터페이스 상태 정보

    for interface, stats in net_io.items():
        print(f"네트워크 인터페이스: {interface}")
        
        # 인터페이스 연결 상태 및 속도 정보
        if interface in net_if_stats:
            interface_stats = net_if_stats[interface]
            status = '활성화됨' if interface_stats.isup else '비활성화됨'
            print(f"  활성 상태: {status}")
            
            if interface_stats.speed > 0:
                print(f"  네트워크 속도: {interface_stats.speed}Mbps")
            else:
                print("  네트워크 속도: 정보 없음")
        
        # 패킷 정보
        print(f"  전송된 패킷 수: {stats.packets_sent}")
        print(f"  수신된 패킷 수: {stats.packets_recv}")
        print(f"  전송된 바이트 수: {stats.bytes_sent}")
        print(f"  수신된 바이트 수: {stats.bytes_recv}")
        
        # 패킷 드롭 및 에러 정보
        print(f"  드롭된 전송 패킷 수: {stats.dropout}")
        print(f"  드롭된 수신 패킷 수: {stats.dropin}")
        print(f"  전송 중 에러 패킷 수: {stats.errout}")
        print(f"  수신 중 에러 패킷 수: {stats.errin}")
        
        print("-" * 40)

if __name__ == "__main__":
    print("현재 네트워크 패킷 및 상태 정보:")
    get_network_packet_info()