from scapy.all import sniff

def packet_callback(packet):
    if packet.haslayer("TCP"):
        tcp_layer = packet.getlayer("TCP")
        print(f"Source: {packet[1].src}, Dest: {packet[1].dst}")
        print(f"TCP Window Size: {tcp_layer.window}")
        print("-" * 50)
        
# sniff(): 네트워크 인터페이스에서 패킷을 실시간으로 캡처
# filter="tcp"를 사용해 TCP 패킷만 캡처하고
# count=10으로 10개의 패킷만 캡처하도록 설정

sniff(filter="tcp", prn=packet_callback, count=10)