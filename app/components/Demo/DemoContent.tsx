'use client'

import { AskTotO, GetChatHistory } from '@/app/services/api'; // Tambahkan import history
import { useMutation, useQuery } from '@tanstack/react-query'; // Tambahkan useQuery
import { useState, useEffect, ChangeEvent, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import { BsFillSendArrowUpFill, BsFillPencilFill, BsCopy } from "react-icons/bs";
import DemoContentEmpty from './DemoContentEmpty';
import Image from 'next/image';


// Struktur data pesan
interface Message {
    role: 'user' | 'assistant';
    content: string;
}

// Gabungkan interface props agar tidak merah
interface DemoContentProps {
    sessionId: string | null;
    onNewMessageSaved: () => void;
}

const DemoContent = ({ sessionId, onNewMessageSaved }: DemoContentProps) => {
    const [text, setText] = useState("");
    const [isMultiLine, setIsMultiLine] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const scrollEndRef = useRef<HTMLDivElement>(null);

    // 1. Ambil data history dari MySQL lewat API
    const { data: chatData, isLoading } = useQuery({
        queryKey: ['chat-history', sessionId],
        queryFn: () => GetChatHistory(sessionId!),
        enabled: !!sessionId,
    });

    // 2. Sinkronkan history ke dalam layar saat sessionId berubah atau data datang
    useEffect(() => {
        if (chatData) {
            setMessages(chatData);
        } else {
            setMessages([]);
        }
    }, [chatData, sessionId]);

    // 3. React Query Mutation untuk chat baru
    const mutation = useMutation({
        mutationFn: (vars: { prompt: string, session_id: string }) => AskTotO(vars.prompt, vars.session_id),
        onSuccess: (data) => {
            setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }]);
            // Trigger agar Sidebar refresh judul
            if (onNewMessageSaved) onNewMessageSaved();
        },
        onError: (error) => {
            console.error("Error koneksi:", error);
            alert("Terjadi kesalahan teknis, Iye'. Cek koneksi Backend!");
        }
    });

    const scrollToBottom = () => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, mutation.isPending]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target;
        target.style.height = 'auto';
        const newHeight = target.scrollHeight;
        target.style.height = `${Math.min(newHeight, 200)}px`;
        setIsMultiLine(newHeight > 45);
        setText(target.value);
    };

    const handleKirim = () => {
        if (!text.trim() || mutation.isPending) return;

        const currentPrompt = text;
        setMessages((prev) => [...prev, { role: 'user', content: currentPrompt }]);

        mutation.mutate({
            prompt: currentPrompt,
            session_id: sessionId || "default-session"
        });

        setText("");
        setIsMultiLine(false);
    };

    return (
        <div className='w-full h-full p-2 flex flex-col gap-5 overflow-hidden mt-5 md:mt-2'>
            <div className='bg-gray-200 rounded-[5px] w-full h-full py-2  flex flex-col '>

                {/* AREA CHAT */}
                <div className='flex-1 overflow-y-auto text-[13px] text-lfirst-1 px-7 pt-2 pb-32'>
                    <div className='flex flex-col gap-4'>





                        {/* Tampilkan Loading saat ambil riwayat */}
                        {isLoading && messages.length === 0 ? (

                            <div className='flex h-full w-full justify-center items-center mt-[10%]'>
                                <div className='flex h-full w-full flex-col justify-center items-center '>
                                    <Image src="/images/loading.gif" alt="Loading" width={150} height={150} className="mx-auto rounded-[100%] border-5 border-lfirst-6" />
                                    <div className="f_spartan text-center text-[20px] animate-pulse text-lfirst-3 font-light">Tabe' Memuat riwayat chat...</div>
                                </div>

                            </div>

                        ) : messages.length === 0 && !mutation.isPending && (
                            <DemoContentEmpty />
                        )}

                        {messages.map((msg, index) => (
                            <div key={index} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} w-full h-fit`}>
                                <div className={`${msg.role === 'user' ? 'bg-lfirst-3 text-lfirst-7 self-end' : 'bg-white text-black self-start shadow-sm'} p-4 rounded-xl max-w-[85%] lg:max-w-[70%]`}>
                                    <ReactMarkdown
                                        components={{
                                            p: ({ children }) => <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>,
                                            ul: ({ children }) => <ul className="list-disc ml-5 mb-3">{children}</ul>,
                                            ol: ({ children }) => <ol className="list-decimal ml-5 mb-3">{children}</ol>,
                                            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                            code: ({ children }) => <code className="bg-gray-200 px-1 rounded text-red-600">{children}</code>
                                        }}
                                    >
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>

                                <div className={`flex pt-1 gap-2 items-center px-2 w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className='text-lfirst-3 text-[10px] opacity-70'>Baru saja</div>
                                    <div className='text-lfirst-3 text-[10px]'>
                                        {msg.role === 'user' ? <BsFillPencilFill size={10} /> : <BsCopy size={10} className='cursor-pointer hover:text-black' />}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {mutation.isPending && (
                            <div className='self-start bg-white p-3 rounded-xl shadow-sm animate-pulse flex items-center gap-2'>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                                <span className="text-gray-500 italic">TotO-L sedang berpikir...</span>
                            </div>
                        )}
                        <div ref={scrollEndRef} />
                    </div>
                </div>

                {/* AREA INPUT FIXED */}
                <div className='relative'>

                    <div className='absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-gray-200 via-gray-200 to-transparent'>
                        <div className='flex justify-center items-center'>
                            <div className={`
                            bg-white rounded-[15px] 
                            border-2 border-lfirst-6 w-[95%] 
                            md:w-[75%] shadow-lg
                            flex items-end p-2
                            transition-all duration-200
                        `}>
                                <textarea
                                    value={text}
                                    onChange={handleChange}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleKirim();
                                        }
                                    }}
                                    rows={1}
                                    placeholder="Tanyakan tentang regulasi daerah..."
                                    className='w-full text-[14px] text-lfirst-2 p-2 bg-transparent resize-none focus:outline-none max-h-37.5 overflow-y-auto'
                                ></textarea>

                                <div className='pb-1 pr-1'>
                                    <button
                                        onClick={handleKirim}
                                        disabled={mutation.isPending || !text.trim()}
                                        className={`
                                        h-9 w-9 rounded-full flex justify-center items-center 
                                        transition-all duration-200
                                        ${mutation.isPending || !text.trim() ? 'bg-gray-300' : 'bg-lfirst-2 hover:bg-lfirst-3 cursor-pointer shadow-md'}
                                    `}
                                    >
                                        <BsFillSendArrowUpFill className='text-white' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DemoContent;